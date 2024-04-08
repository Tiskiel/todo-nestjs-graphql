import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class UserDto {
  user: Prisma.Prisma__UserClient<{
    id: number;
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
  }>;
  response: {
    message: string;
    code: number;
  };
}
