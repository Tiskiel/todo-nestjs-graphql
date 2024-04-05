import { Module } from '@nestjs/common';
import { CoreModule } from 'src/Core/CoreModule';
import { HelloWorldResolver } from './HelloWorld/Resolvers/HelloWorldResolver';
import { UserModule } from './User/UserModule';

@Module({
  imports: [CoreModule, UserModule],
  providers: [HelloWorldResolver],
})
export class ApiModule {}
