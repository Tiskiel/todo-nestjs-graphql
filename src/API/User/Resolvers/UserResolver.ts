import { UserFindAllUseCase } from '../UseCases/UserFindAllUseCase';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '../Entities/User';
import { UserFindByIdUseCase } from '../UseCases/UserFindByIdUseCase';
import { CreateUserDto } from '../Dto/CreateUserDto';
import { UserCreateUseCase } from '../UseCases/UserCreateUseCase';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly _findAll: UserFindAllUseCase,
    private readonly _findById: UserFindByIdUseCase,
    private readonly _create: UserCreateUseCase,
  ) {}

  @Query(() => [User])
  async findAllUsers(): Promise<User[]> {
    return await this._findAll.handle();
  }

  @Query(() => User)
  async findUserById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<User> {
    return await this._findById.handle(id);
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserDto): Promise<User> {
    return await this._create.handle(data);
  }
}
