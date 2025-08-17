import { Module } from '@nestjs/common';
import { OrdersMsController } from './orders-ms.controller';
import { OrdersMsService } from './orders-ms.service';

@Module({
  imports: [],
  controllers: [OrdersMsController],
  providers: [OrdersMsService],
})
export class OrdersMsModule {}
