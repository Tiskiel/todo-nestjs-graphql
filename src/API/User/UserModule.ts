import { Module } from '@nestjs/common';
import { UserRepository } from './Repositories/UserRepository';
import { CoreModule } from 'src/Core/CoreModule';
import { UserResolver } from './Resolvers/UserResolver';
import { UserFindAllUseCase } from './UseCases/UserFindAllUseCase';
import { PrismaService } from 'src/Core/Prisma/PrismaService';

@Module({
  imports: [CoreModule],
  exports: [UserRepository],
  providers: [UserRepository, UserResolver, UserFindAllUseCase, PrismaService],
})
export class UserModule {}
