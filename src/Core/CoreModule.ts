import { Module } from '@nestjs/common';
import GraphQLModule from './GraphQLModule';

@Module({
  imports: [GraphQLModule],
  controllers: [],
  providers: [],
})
export class CoreModule {}
