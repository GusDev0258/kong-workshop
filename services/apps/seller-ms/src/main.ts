import { NestFactory } from '@nestjs/core';
import { SellerMsModule } from './seller-ms.module';

async function bootstrap() {
  const app = await NestFactory.create(SellerMsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
