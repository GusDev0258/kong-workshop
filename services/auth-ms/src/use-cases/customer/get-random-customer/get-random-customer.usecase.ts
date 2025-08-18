import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import type { CustomerClientGrpc } from '../interfaces/customer-client.grpc-interface';
import type { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';
import type { CustomerResponse } from '../dtos/customer-response.dto';

@Injectable()
export class GetRandomCustomerUsecase implements OnModuleInit {
  private customerGrpcClient: CustomerClientGrpc;
  constructor(
    @Inject('CUSTOMER_SERVICE') private readonly customerClient: ClientGrpc,
  ) {}
  onModuleInit() {
    this.customerGrpcClient =
      this.customerClient.getService<CustomerClientGrpc>('CustomerService');
  }
  async execute(): Promise<Observable<CustomerResponse>> {
    const customer = await firstValueFrom(
      this.customerGrpcClient.GetRandomCustomer({}),
    );
    return customer;
  }
}
