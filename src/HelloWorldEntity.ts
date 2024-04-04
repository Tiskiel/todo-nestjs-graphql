import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class HelloWorldEntity {
  @Field()
  message: string;
}
