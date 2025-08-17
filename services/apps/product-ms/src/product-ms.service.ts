import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductMsService {
  getHello(): string {
    return 'Hello World!';
  }
}
