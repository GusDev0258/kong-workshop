import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UseCasesModule } from './use-cases/use-cases.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UseCasesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
