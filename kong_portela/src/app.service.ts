import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('Chamou o kong portela');
    return '<h1>Kong API Gateway é massa demais</h1>';
  }
}
