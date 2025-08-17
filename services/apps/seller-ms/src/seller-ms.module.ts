import { Module } from '@nestjs/common';
import { SellerMsController } from './seller-ms.controller';
import { SellerMsService } from './seller-ms.service';

@Module({
  imports: [],
  controllers: [SellerMsController],
  providers: [SellerMsService],
})
export class SellerMsModule {}
