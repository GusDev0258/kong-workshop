import { Module } from '@nestjs/common';
import { LeadsMsController } from './leads-ms.controller';
import { LeadsMsService } from './leads-ms.service';

@Module({
  imports: [],
  controllers: [LeadsMsController],
  providers: [LeadsMsService],
})
export class LeadsMsModule {}
