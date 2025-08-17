import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { GetRandomUseCase } from './use-cases/get-random.usecase';

@Controller('customer')
export class CustomerController {
  constructor(private readonly getRandomCustomerUseCase: GetRandomUseCase) {}

  @GrpcMethod('CustomerService', 'GetRandomCustomer')
  async getRandomCustomer(data: {}) {
    return this.getRandomCustomerUseCase.execute();
  }

  @Get()
  async getRandomCustomerHttp() {
    return this.getRandomCustomerUseCase.execute();
  }
}
