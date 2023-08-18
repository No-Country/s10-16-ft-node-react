import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './services/user.service';
import { user as UserModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async check() {
    return 'Prendio la chingadera';
  }
  @Post('user')
  async signupUser(@Body() userData: { name: string }): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
