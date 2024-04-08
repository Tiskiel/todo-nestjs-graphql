import { Prisma } from '@prisma/client';

export interface UserType {
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
