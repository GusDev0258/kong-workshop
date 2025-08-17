import { Module } from '@nestjs/common';
import { CustomerMsController } from './customer-ms.controller';
import { CustomerMsService } from './customer-ms.service';

@Module({
  imports: [],
  controllers: [CustomerMsController],
  providers: [CustomerMsService],
})
export class CustomerMsModule {}
