import { Module } from '@nestjs/common';
import { CoreModule } from 'src/Core/CoreModule';
import { HelloWorldResolver } from './HelloWorld/Resolvers/HelloWorldResolver';

@Module({
  imports: [CoreModule],
  providers: [HelloWorldResolver],
})
export class ApiModule {}
