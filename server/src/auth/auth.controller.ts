import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  register(@Body() userObject: RegisterAuthDto) {
    return this.authService.register(userObject);
  }

  @Post('login')
  login(@Body() userObject: RegisterAuthDto) {
    return this.authService.login(userObject);
  }
}
