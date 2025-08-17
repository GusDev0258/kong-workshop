import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerRepository } from './repositories/customer-repository/customer-repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';
import { GetRandomUseCase } from './use-cases/get-random.usecase';

@Module({
  imports: [SequelizeModule.forFeature([Customer])],
  controllers: [CustomerController],
  providers: [
    GetRandomUseCase,
    {
      provide: 'CustomerGateway',
      useClass: CustomerRepository,
    },
  ],
})
export class CustomerModule {}
