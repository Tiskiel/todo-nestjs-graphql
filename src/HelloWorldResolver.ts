import { Query, Resolver } from '@nestjs/graphql';
import { HelloWorldEntity } from './HelloWorldEntity';

@Resolver(HelloWorldEntity)
export class HelloWorldResolver {
  @Query(() => HelloWorldEntity)
  async helloWorld(): Promise<HelloWorldEntity> {
    return {
      message: 'Hello, World!',
    };
  }
}
