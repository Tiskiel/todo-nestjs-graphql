import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

export default GraphQLModule.forRoot<ApolloDriverConfig>({
  autoSchemaFile: './schema.gql',
  sortSchema: true,
  driver: ApolloDriver,
  playground: true,
});
