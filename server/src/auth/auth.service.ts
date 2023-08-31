import { HttpException, Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt';
import { PrismaService } from 'src/service.prisma';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from 'src/services/mailer/mailer.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,
  ) { }
  async register(userObject: RegisterAuthDto) {
    const { password, email } = userObject;
    const findUser = await this.prismaService.accounts.findUnique({
      where: { email },
    });
    if (findUser) throw new HttpException('Email Already Registered', 409);
    const plainToHash = await hash(password, 10);
    userObject = { ...userObject, password: plainToHash, is_active: true };
    const adaptedEmail = email.replace(/@/g, '%40')
    await this.mailerService.sendMail(
      email,
      'Please verify your email',
      `Your account has been created, please click on the link below to verify your account ${process.env.BACK_URL}/accounts/verify/${adaptedEmail}`,
    );
    return this.prismaService.accounts.create({ data: userObject });
  }

  async login(userObject: LoginAuthDto) {
    const { email, password } = userObject;
    const findUser = await this.prismaService.accounts.findUnique({
      where: { email },
    });
    if (!findUser) throw new HttpException('User not found', 404);
    if (!findUser.is_active) throw new HttpException('Account deleted', 404)
    const checkPassword = await compare(password, findUser.password);
    if (!checkPassword) throw new HttpException('Password incorrect', 403);

    const paiload = {
      email: findUser.email,
      id: findUser.id,
    };
    const token = this.jwtService.sign(paiload);

    const data = {
      user: findUser,
      token,
    };
    return data;
  }
}
