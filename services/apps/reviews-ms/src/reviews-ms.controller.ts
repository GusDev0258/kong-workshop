import { Controller, Get } from '@nestjs/common';
import { ReviewsMsService } from './reviews-ms.service';

@Controller()
export class ReviewsMsController {
  constructor(private readonly reviewsMsService: ReviewsMsService) {}

  @Get()
  getHello(): string {
    return this.reviewsMsService.getHello();
  }
}
