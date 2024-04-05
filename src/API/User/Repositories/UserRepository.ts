import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/Core/Prisma/PrismaService';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }
}
