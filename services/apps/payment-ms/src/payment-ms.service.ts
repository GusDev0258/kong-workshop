import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentMsService {
  getHello(): string {
    return 'Hello World!';
  }
}
