import { IsEmail, IsOptional, Length } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({ description: 'User name', minLength: 3, maxLength: 100, example: 'John Doe' })
  @IsOptional()
  @Length(3, 100)
  name?: string;

  @ApiPropertyOptional({ description: 'User email', example: 'john@example.com' })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ description: 'User password', minLength: 6, example: 'newPassword123' })
  @IsOptional()
  @Length(6)
  password?: string;
}
