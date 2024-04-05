import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserEntity {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  //No field decorator means this field is not exposed to the GraphQL schema
  password: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
