import { Customer } from '../entities/customer.entity';

export interface CustomerGateway {
  findAll(): Promise<Customer[]>;
  findRandom(): Promise<Customer | null>;
}
