import { Query } from '@nestjs/common';
import { UserFindAllUseCase } from '../UseCases/UserFindAllUseCase';
import { Resolver } from '@nestjs/graphql';
import { User } from '../Entities/User';

@Resolver(() => [User])
export class UserResolver {
  constructor(private _findAll: UserFindAllUseCase) {}

  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return await this._findAll.handle();
  }
}
