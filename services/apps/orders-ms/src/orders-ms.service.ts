import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersMsService {
  getHello(): string {
    return 'Hello World!';
  }
}
