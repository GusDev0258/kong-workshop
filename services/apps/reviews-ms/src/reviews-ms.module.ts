import { Module } from '@nestjs/common';
import { ReviewsMsController } from './reviews-ms.controller';
import { ReviewsMsService } from './reviews-ms.service';

@Module({
  imports: [],
  controllers: [ReviewsMsController],
  providers: [ReviewsMsService],
})
export class ReviewsMsModule {}
