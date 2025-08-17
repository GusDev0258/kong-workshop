import { NestFactory } from '@nestjs/core';
import { GeolocationMsModule } from './geolocation-ms.module';

async function bootstrap() {
  const app = await NestFactory.create(GeolocationMsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
