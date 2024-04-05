import { UserFindAllUseCase } from '../UseCases/UserFindAllUseCase';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../Entities/User';

@Resolver(() => [User])
export class UserResolver {
  constructor(private readonly _findAll: UserFindAllUseCase) {}

  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return await this._findAll.handle();
  }
}
