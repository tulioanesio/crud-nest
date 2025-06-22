import { Controller, Post, Body, Get, Delete, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() body: { name: string; email: string; password: string }) {
    return this.userService.createUser(body);
  }

  @Get()
  findAll() {
    return this.userService.getAllUsers();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.deleteUser(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { name: string; email: string; password: string }) {
    return this.userService.updateUser(Number(id), body);
  }
}
