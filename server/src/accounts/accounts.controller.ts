import { Controller, Get, Body, Patch, Delete, UseGuards, Req, Redirect, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { UpdateAccountDto } from './dto/update-account.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
@ApiTags('accounts')
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) { }

  @Get('verify/:email')
  @Redirect(`${process.env.FRONT_URL}/auth/login`)
  async verifyAccount(@Param('email') email: string) {
    return await this.accountsService.verifyAccount(email);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return this.accountsService.findOne(req.user.email);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Patch('update')
  update(@Req() req, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(req.user.email, updateAccountDto);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete('delete')
  remove(@Req() req) {
    return this.accountsService.remove(req.user.email);
  }
}
