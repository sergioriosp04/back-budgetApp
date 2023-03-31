import { IsNotEmpty, MinLength, MaxLength, IsInt } from 'class-validator'
export class CreateAccountDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string

  @MinLength(5)
  @MaxLength(250)
  description: string
}
