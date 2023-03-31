import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Account } from './account.model'
import { CreateAccountDto } from './dto/create-account.dto'
import { ApiResponse } from '@nestjs/swagger'
import { JwtPayload } from 'src/auth/jwtPayload.interface'

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account)
    private accountModel: typeof Account,
  ) {}

  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async create(
    createAccountDto: CreateAccountDto,
    user: JwtPayload,
  ): Promise<Account | any> {
    const account = await this.accountModel.findOne({
      where: {
        name: createAccountDto.name,
      },
    })

    if (account) {
      throw new HttpException('Account already exists', HttpStatus.BAD_REQUEST)
    }

    const newAccount = await this.accountModel.create({
      userId: user.id,
      name: createAccountDto.name,
      description: createAccountDto.description,
    })

    return newAccount
  }
}
