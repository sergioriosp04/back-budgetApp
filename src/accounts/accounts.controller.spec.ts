import { Test, TestingModule } from '@nestjs/testing'
import { AccountsController } from './accounts.controller'
import { AccountsService } from './accounts.service'
import { Account } from './account.model'
import { getModelToken } from '@nestjs/sequelize'
import { mockAccountModel } from './account.mock'

describe('AccountsController', () => {
  let controller: AccountsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountsController],
      providers: [
        AccountsService,
        {
          provide: getModelToken(Account),
          useValue: mockAccountModel,
        },
      ],
    }).compile()

    controller = module.get<AccountsController>(AccountsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
