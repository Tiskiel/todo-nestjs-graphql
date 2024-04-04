import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HelloWorldResolver } from './HelloWorldResolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: './schema.gql',
      sortSchema: true,
      driver: ApolloDriver,
      playground: true,
    }),
  ],
  providers: [HelloWorldResolver],
})
export class AppModule {}
