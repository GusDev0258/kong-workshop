import { Module } from '@nestjs/common';
import { ProductMsController } from './product-ms.controller';
import { ProductMsService } from './product-ms.service';

@Module({
  imports: [],
  controllers: [ProductMsController],
  providers: [ProductMsService],
})
export class ProductMsModule {}
