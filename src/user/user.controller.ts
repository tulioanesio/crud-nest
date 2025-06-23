import { Controller, Post, Body, Get, Delete, Param, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from '../dtos/create-user';
import { UpdateUserDto } from '../dtos/update-user';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateUserDto ) {
    return this.userService.createUser(body);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.userService.getAllUsers();
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.userService.deleteUser(Number(id));
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() body: UpdateUserDto) {
    return this.userService.updateUser(Number(id), body);
  } 
}
