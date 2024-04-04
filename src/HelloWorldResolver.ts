import { Query, Resolver } from '@nestjs/graphql';
import { HelloWorld } from './HelloWorld';

@Resolver(HelloWorld)
export class HelloWorldResolver {
  @Query(() => HelloWorld)
  async helloWorld(): Promise<HelloWorld> {
    return {
      message: 'Hello, World!',
    };
  }
}
