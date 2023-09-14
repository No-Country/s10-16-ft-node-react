import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from 'src/service.prisma';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { MailerService } from 'src/services/mailer/mailer.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '20h' },
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtStrategy, MailerService],
})
export class AuthModule { }
