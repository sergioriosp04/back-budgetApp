import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  UseGuards,
  Request,
  NotFoundException,
} from '@nestjs/common'
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

  @Get(':id')
  async findOne(@Param('id') id: string, @Request() req) {
    const userId = req.user.id
    const account = await this.accountsService.findOne(id, userId)

    if (!account) {
      throw new NotFoundException('not account found')
    }

    return account
  }
}
