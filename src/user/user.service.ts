import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from 'src/dtos/create-user';
import { UpdateUserDto } from 'src/dtos/update-user';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async createUser(data: CreateUserDto) {
    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password
      },
    });

    return user;
  }
  async getAllUsers() {
    return await prisma.user.findMany();
    }

    async deleteUser(id: number) {
  return await prisma.user.delete({
    where: { id },
  });
}

    async updateUser(id: number, data: UpdateUserDto) {
  return await prisma.user.update({
    where: { id },
    data,
  });
}

}
