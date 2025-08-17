import { NestFactory } from '@nestjs/core';
import { CustomerMsModule } from './customer-ms.module';

async function bootstrap() {
  const app = await NestFactory.create(CustomerMsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
