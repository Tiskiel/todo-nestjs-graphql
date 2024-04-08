import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/Core/Prisma/PrismaService';
import { CreateUserDto } from '../Dto/CreateUserDto';
import { UserType } from '../Type/UserType';
import { User } from '../Entities/User';

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
      // Gérer les erreurs ici, par exemple :
      console.error(
        "Une erreur s'est produite lors de la création de l'utilisateur :",
        error,
      );
      throw error;
    }
  }
}
