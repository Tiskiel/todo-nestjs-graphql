import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/Core/Prisma/PrismaService';
import { CreateUserDto } from '../Dto/CreateUserDto';
import { UserType } from '../Type/UserType';

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

  create(data: CreateUserDto): UserType {
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
