import { Resolver } from '@nestjs/graphql';
import { HelloWorld } from './HelloWorld';

@Resolver(HelloWorld)
export class HelloWorldResolver {
  async helloWorld(): Promise<HelloWorld> {
    return {
      message: 'Hello, World!',
    };
  }
}
