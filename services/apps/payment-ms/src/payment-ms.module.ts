import { Module } from '@nestjs/common';
import { PaymentMsController } from './payment-ms.controller';
import { PaymentMsService } from './payment-ms.service';

@Module({
  imports: [],
  controllers: [PaymentMsController],
  providers: [PaymentMsService],
})
export class PaymentMsModule {}
