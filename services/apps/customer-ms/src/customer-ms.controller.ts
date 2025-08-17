import { Controller, Get } from '@nestjs/common';
import { CustomerMsService } from './customer-ms.service';

@Controller()
export class CustomerMsController {
  constructor(private readonly customerMsService: CustomerMsService) {}

  @Get()
  getHello(): string {
    return this.customerMsService.getHello();
  }
}
