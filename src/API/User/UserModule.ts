import { Module } from '@nestjs/common';
import { UserRepository } from './Repositories/UserRepository';
import { CoreModule } from 'src/Core/CoreModule';
import { UserResolver } from './Resolvers/UserResolver';
import { UserFindAllUseCase } from './UseCases/UserFindAllUseCase';

@Module({
  imports: [CoreModule],
  exports: [UserRepository],
  providers: [UserRepository, UserResolver, UserFindAllUseCase],
})
export class UserModule {}
