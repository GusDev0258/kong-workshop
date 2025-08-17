import { Controller, Get } from '@nestjs/common';
import { SellerMsService } from './seller-ms.service';

@Controller()
export class SellerMsController {
  constructor(private readonly sellerMsService: SellerMsService) {}

  @Get()
  getHello(): string {
    return this.sellerMsService.getHello();
  }
}
