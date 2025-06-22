import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async createUser(data: {name: string; email: string; password: string }) {
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

    async updateUser(id: number, data: { name: string; email: string; password: string }) {
  return await prisma.user.update({
    where: { id },
    data,
  });
}

}
