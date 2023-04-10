import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { AccountsService } from './accounts.service'
import { CreateAccountDto } from './dto/create-account.dto'

@UseGuards(JwtAuthGuard)
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  create(@Body() createAccountDto: CreateAccountDto, @Request() req) {
    return this.accountsService.create(createAccountDto, req.user)
  }
}
