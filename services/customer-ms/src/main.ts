import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      package: 'workshop',
      protoPath: [join(__dirname, 'customer', 'proto', 'customer.proto')],
      url: 'localhost:50051',
    },
  });
  app.enableCors({
    origin: process.env.CORS_ORIGIN || '*',
  });
  await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
