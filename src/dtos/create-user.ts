import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'User name', minLength: 3, maxLength: 100, example: 'John Doe' })
  @IsNotEmpty()
  @Length(3, 100)
  name: string;

  @ApiProperty({ description: 'User email', example: 'john@example.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'User password', minLength: 6, example: 'password123' })
  @IsNotEmpty()
  @Length(6)
  password: string;
}
