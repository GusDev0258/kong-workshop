import { Controller, Get } from '@nestjs/common';
import { ProductMsService } from './product-ms.service';

@Controller()
export class ProductMsController {
  constructor(private readonly productMsService: ProductMsService) {}

  @Get()
  getHello(): string {
    return this.productMsService.getHello();
  }
}
