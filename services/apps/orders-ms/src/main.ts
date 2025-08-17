import { NestFactory } from '@nestjs/core';
import { OrdersMsModule } from './orders-ms.module';

async function bootstrap() {
  const app = await NestFactory.create(OrdersMsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
