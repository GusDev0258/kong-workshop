import { Controller, Get } from '@nestjs/common';
import { OrdersMsService } from './orders-ms.service';

@Controller()
export class OrdersMsController {
  constructor(private readonly ordersMsService: OrdersMsService) {}

  @Get()
  getHello(): string {
    return this.ordersMsService.getHello();
  }
}
