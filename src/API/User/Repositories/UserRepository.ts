import { Injectable } from '@nestjs/common';
import { PrismaPromise } from '@prisma/client';
import { PrismaService } from 'src/Core/Prisma/PrismaService';
import { User } from '../Entities/User';

@Injectable()
export class UserRepository {
  constructor(private _prisma: PrismaService) {}

  findAll(): PrismaPromise<User[]> {
    return this._prisma.user.findMany();
  }

  findOne(id: number): PrismaPromise<User> {
    return this._prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
