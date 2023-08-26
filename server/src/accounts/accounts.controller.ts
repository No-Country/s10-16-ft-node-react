import { Controller, Get, Body, Patch, Delete, UseGuards, Req } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { UpdateAccountDto } from './dto/update-account.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) { }

  @Get('profile')
  getProfile(@Req() req) {
    return this.accountsService.findOne(req.user.email);
  }

  @Patch('update')
  update(@Req() req, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(req.user.email, updateAccountDto);
  }

  @Delete('delete')
  remove(@Req() req) {
    return this.accountsService.remove(req.user.email);
  }
}
