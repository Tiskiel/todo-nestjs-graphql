import { Module } from '@nestjs/common';
import GraphQLModule from './GraphQLModule';
import { PrismaService } from './Prisma/PrismaService';

@Module({
  imports: [GraphQLModule],
  controllers: [],
  providers: [PrismaService],
})
export class CoreModule {}
