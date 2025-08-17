import { NestFactory } from '@nestjs/core';
import { SeederModule } from './seeder.module';

async function bootstrap() {
  const app = await NestFactory.create(SeederModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
