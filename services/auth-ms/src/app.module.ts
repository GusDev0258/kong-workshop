import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UseCasesModule } from './use-cases/use-cases.module';

@Module({
  imports: [UseCasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
