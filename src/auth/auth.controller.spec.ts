import { Test, TestingModule } from '@nestjs/testing'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'
import { EmailService } from '../services/email.service'
import { BcryptService } from '../services/bcrypt.service'
import { getModelToken } from '@nestjs/sequelize'
import { User } from '../users/user.model'
import { mockUserModel } from '../users/user.mock'

describe('AuthController', () => {
  let controller: AuthController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        UsersService,
        {
          provide: getModelToken(User),
          useValue: mockUserModel,
        },
        JwtService,
        EmailService,
        BcryptService,
      ],
    }).compile()

    controller = module.get<AuthController>(AuthController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
