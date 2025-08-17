import { CustomerRequest } from '../dtos/customer-request.dto';
import { CustomerResponse } from '../dtos/customer-response.dto';

export interface CustomerClientGrpc {
  GetRandomCustomer(data: {}): Promise<CustomerResponse>;
  GetCustomerById(request: CustomerRequest): Promise<CustomerResponse>;
}
