import { Test, TestingModule } from '@nestjs/testing'
import { AccountsService } from './accounts.service'
import { Account } from './account.model'
import { getModelToken } from '@nestjs/sequelize'
import { mockAccountModel } from './account.mock'

describe('AccountsService', () => {
  let service: AccountsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AccountsService,
        {
          provide: getModelToken(Account),
          useValue: mockAccountModel,
        },
      ],
    }).compile()

    service = module.get<AccountsService>(AccountsService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
