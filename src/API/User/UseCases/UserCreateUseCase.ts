import { Injectable } from '@nestjs/common';
import { UserRepository } from '../Repositories/UserRepository';
import { CreateUserDto } from '../Dto/CreateUserDto';
import { UserType } from '../Type/UserType';

@Injectable()
export class UserCreateUseCase {
  constructor(private readonly _userRepository: UserRepository) {}

  async handle(data: CreateUserDto): Promise<UserType> {
    return this._userRepository.create(data);
  }
}
