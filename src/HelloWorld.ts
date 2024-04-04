import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HelloWorld {
  message: string;
}
