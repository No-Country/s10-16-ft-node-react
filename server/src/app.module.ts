import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './services/user.service';
import { PrismaService } from './service.prisma';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, UserService, AppService],
})
export class AppModule {}
