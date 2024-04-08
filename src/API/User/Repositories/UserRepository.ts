import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/Core/Prisma/PrismaService';
import { UserDto } from '../Type/UserDto';

@Injectable()
export class UserRepository {
  constructor(private _prisma: PrismaService) {}

  findAll() {
    return this._prisma.user.findMany();
  }

  findById(id: number) {
    return this._prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  create(data: { name: string; email: string; password: string }): UserDto {
    return {
      user: this._prisma.user.create({
        data,
      }),
      response: {
        message: 'User created successfully',
        code: 201,
      },
    };
  }
}
