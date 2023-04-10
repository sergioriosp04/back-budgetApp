import { Test, TestingModule } from '@nestjs/testing'
import { AuthService } from './auth.service'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'
import { EmailService } from '../services/email.service'
import { BcryptService } from '../services/bcrypt.service'
import { getModelToken } from '@nestjs/sequelize'
import { User } from '../users/user.model'
import { mockUserModel } from '../users/user.mock'

describe('AuthService', () => {
  let service: AuthService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        JwtService,
        EmailService,
        BcryptService,
        UsersService,
        {
          provide: getModelToken(User),
          useValue: mockUserModel,
        },
      ],
    }).compile()

    service = module.get<AuthService>(AuthService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
