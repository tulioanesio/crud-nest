import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/create-user';
import { UpdateUserDto } from 'src/dtos/update-user';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto) {
    const user = await this.prisma.user.create({
      data,
    });
    return user;
  }
  async getAllUsers() {
    return await this.prisma.user.findMany();
  }

  async deleteUser(id: number) {
    return await this.prisma.user.delete({
      where: { id },
    });
  }

  async updateUser(id: number, data: UpdateUserDto) {
    return await this.prisma.user.update({
      where: { id },
      data,
    });
  }
}
