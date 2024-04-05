import { NestFactory } from '@nestjs/core';
import { ApiModule } from './API/ApiModule';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  await app.listen(3000);
}
bootstrap();
