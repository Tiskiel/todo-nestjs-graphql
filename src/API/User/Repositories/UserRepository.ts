import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/Core/Prisma/PrismaService';
import { CreateUserDto } from '../Dto/CreateUserDto';
import { Bcrypt } from 'src/Core/Security/Encryption/Bcrypt';

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

  create(data: CreateUserDto) {
    try {
      return this._prisma.user.create({
        data,
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
