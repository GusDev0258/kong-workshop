import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerMsService {
  getHello(): string {
    return 'Hello World!';
  }
}
