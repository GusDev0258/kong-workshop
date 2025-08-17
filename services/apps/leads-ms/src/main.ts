import { NestFactory } from '@nestjs/core';
import { LeadsMsModule } from './leads-ms.module';

async function bootstrap() {
  const app = await NestFactory.create(LeadsMsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
