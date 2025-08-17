import { NestFactory } from '@nestjs/core';
import { ReviewsMsModule } from './reviews-ms.module';

async function bootstrap() {
  const app = await NestFactory.create(ReviewsMsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
