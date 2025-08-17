import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {},
  });
  app.enableCors({
    origin: process.env.CORS_ORIGIN || '*',
  });
  await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 3007);
}
bootstrap();
