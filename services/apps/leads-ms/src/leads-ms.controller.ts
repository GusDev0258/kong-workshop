import { Controller, Get } from '@nestjs/common';
import { LeadsMsService } from './leads-ms.service';

@Controller()
export class LeadsMsController {
  constructor(private readonly leadsMsService: LeadsMsService) {}

  @Get()
  getHello(): string {
    return this.leadsMsService.getHello();
  }
}
