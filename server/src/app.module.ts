import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './services/user.service';
import { PrismaService } from './service.prisma';
import { AccountsModule } from './accounts/accounts.module';
import { AccountsService } from './accounts/accounts.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [AccountsModule, AuthModule, JwtModule],
  controllers: [AppController],
  providers: [
    PrismaService,
    UserService,
    AppService,
    AccountsService,
    AuthService,
  ],
  exports: [PrismaService]
})
export class AppModule { }
