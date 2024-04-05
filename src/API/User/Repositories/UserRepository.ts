import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/Core/Prisma/PrismaService';

@Injectable()
export class UserRepository {
  constructor(private _prisma: PrismaService) {}

  findAll() {
    return this._prisma.user.findMany();
  }

  findOne(id: number) {
    return this._prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
