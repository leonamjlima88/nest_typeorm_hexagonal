import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3005);
}
bootstrap().then((r) => r);