import { HttpException, Injectable } from '@nestjs/common';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from 'src/service.prisma';
import { hash, compare } from 'bcrypt';
@Injectable()
export class AccountsService {
  constructor(private readonly prismaService: PrismaService) { }

  async findOne(email: string) {
    const findAccount = await this.prismaService.accounts.findUnique({
      where: { email },
      include: {
        projects: true,
      },
    });
    return findAccount;
  }
  async update(email: string, updateAccountDto: UpdateAccountDto) {
    // if you dont change password
    if (!updateAccountDto.password) {
      const updatedAccount = await this.prismaService.accounts.update({
        where: { email },
        data: updateAccountDto,
      });
      return updatedAccount;
    }
    // if you change password
    const findAccount = await this.prismaService.accounts.findUnique({
      where: { email },
    });
    const comparison = await compare(
      updateAccountDto.password,
      findAccount.password,
    );
    if (comparison) {
      throw new HttpException('Password is the same', 409);
    } else {
      const plainToHash = await hash(updateAccountDto.password, 10);
      const updatedAccount = await this.prismaService.accounts.update({
        where: { email },
        data: { ...updateAccountDto, password: plainToHash },
      });
      return updatedAccount;
    }
  }
  async remove(email: string) {
    const deletedAccount = await this.prismaService.accounts.update({
      where: { email },
      data: {
        is_active: false,
      }
    });
    return deletedAccount;
  }
  async verifyAccount(email: string) {
    const updatedAccount = await this.prismaService.accounts.update({
      where: { email },
      data: {
        verified: true,
      }
    });
    return updatedAccount;
  }
}
