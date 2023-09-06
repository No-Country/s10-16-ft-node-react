import { Module } from '@nestjs/common';
import { PrismaService } from './service.prisma';
import { AccountsModule } from './accounts/accounts.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ProjectsModule } from './projects/projects.module';
@Module({
  imports: [AccountsModule, AuthModule, JwtModule, ProjectsModule],
  providers: [PrismaService],
  exports: [PrismaService]
})
export class AppModule { }
