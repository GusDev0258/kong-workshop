import { Controller, Get } from '@nestjs/common';
import { PaymentMsService } from './payment-ms.service';

@Controller()
export class PaymentMsController {
  constructor(private readonly paymentMsService: PaymentMsService) {}

  @Get()
  getHello(): string {
    return this.paymentMsService.getHello();
  }
}
