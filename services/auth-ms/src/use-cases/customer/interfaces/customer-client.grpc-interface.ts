import { Observable } from 'rxjs';
import { CustomerRequest } from '../dtos/customer-request.dto';
import { CustomerResponse } from '../dtos/customer-response.dto';

export interface CustomerClientGrpc {
  GetRandomCustomer(data: {}): Observable<CustomerResponse>;
  GetCustomerById(request: CustomerRequest): Observable<CustomerResponse>;
}
