import { NestFactory } from '@nestjs/core';
import { PaymentMsModule } from './payment-ms.module';

async function bootstrap() {
  const app = await NestFactory.create(PaymentMsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
