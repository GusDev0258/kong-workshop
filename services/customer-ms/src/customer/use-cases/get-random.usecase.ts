import { Inject, Injectable } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import type { CustomerGateway } from '../interfaces/customer-gateway.interface';

@Injectable()
export class GetRandomUseCase {
  constructor(
    @Inject('CustomerGateway')
    private readonly customerRepository: CustomerGateway,
  ) {}

  async execute(): Promise<Customer> {
    const customer = await this.customerRepository.findRandom();
    if (!customer) {
      throw new Error('Customer not found!');
    }
    return customer;
  }
}
