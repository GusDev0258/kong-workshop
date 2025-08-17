import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize';
import { Customer } from 'src/customer/models/customer.model';
import { Customer as CustomerEntity } from '../../entities/customer.entity';
import { CustomerGateway } from 'src/customer/interfaces/customer-gateway.interface';

@Injectable()
export class CustomerRepository implements CustomerGateway {
  constructor(
    @InjectModel(Customer) private readonly customerModel: typeof Customer,
  ) {}

  async findAll(): Promise<CustomerEntity[]> {
    const customers = await this.customerModel.findAll();
    return customers.map((customer) => ({
      uuid: customer?.customerUniqueId,
      id: customer?.customerId,
      zipCode: customer?.customerZipCodePrefix,
      city: customer?.customerCity,
      state: customer?.customerState,
    })) as CustomerEntity[];
  }

  async findRandom(): Promise<CustomerEntity | null> {
    const customer = await this.customerModel.findOne({
      order: Sequelize.literal('RANDOM()'),
    });

    if (!customer) {
      return null;
    }

    return {
      uuid: customer.customerUniqueId,
      id: customer.customerId,
      zipCode: customer.customerZipCodePrefix,
      city: customer.customerCity,
      state: customer.customerState,
    } as CustomerEntity;
  }
}
