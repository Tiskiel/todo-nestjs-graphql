import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  name?: string;
  email: string;
  password: string;
}
