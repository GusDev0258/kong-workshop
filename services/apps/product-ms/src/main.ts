import { NestFactory } from '@nestjs/core';
import { ProductMsModule } from './product-ms.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductMsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
