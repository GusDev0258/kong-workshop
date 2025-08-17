import { Injectable } from '@nestjs/common';

@Injectable()
export class ReviewsMsService {
  getHello(): string {
    return 'Hello World!';
  }
}
