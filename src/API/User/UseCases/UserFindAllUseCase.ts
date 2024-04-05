import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from '../Repositories/UserRepository';
import { User } from '../Entities/User';

@Injectable()
export class UserFindAllUseCase {
  constructor(private readonly _userRepository: UserRepository) {}

  async handle(): Promise<User[]> {
    try {
      return await this._userRepository.findAll();
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
