import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from '../Repositories/UserRepository';
import { User } from '../Entities/User';

@Injectable()
export class UserFindByIdUseCase {
  constructor(private readonly _userRepository: UserRepository) {}

  async handle(id: number): Promise<User> {
    try {
      return await this._userRepository.findById(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
