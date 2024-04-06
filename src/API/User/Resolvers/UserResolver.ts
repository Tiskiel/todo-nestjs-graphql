import { UserFindAllUseCase } from '../UseCases/UserFindAllUseCase';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { User } from '../Entities/User';
import { UserFindByIdUseCase } from '../UseCases/UserFindByIdUseCase';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly _findAll: UserFindAllUseCase,
    private readonly _findById: UserFindByIdUseCase,
  ) {}

  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return await this._findAll.handle();
  }

  @Query(() => User)
  async findUserById(@Args('id') id): Promise<User> {
    return await this._findById.handle(id);
  }
}
