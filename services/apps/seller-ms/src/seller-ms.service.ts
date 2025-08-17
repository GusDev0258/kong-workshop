import { Injectable } from '@nestjs/common';

@Injectable()
export class SellerMsService {
  getHello(): string {
    return 'Hello World!';
  }
}
