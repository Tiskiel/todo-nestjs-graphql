import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from '../Repositories/UserRepository';
import { CreateUserDto } from '../Dto/CreateUserDto';
import { User } from '../Entities/User';

@Injectable()
export class UserCreateUseCase {
  constructor(private readonly _userRepository: UserRepository) {}

  async handle(data: CreateUserDto): Promise<User> {
    try {
      return await this._userRepository.create(data);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
