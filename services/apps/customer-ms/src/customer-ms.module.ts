import { Module } from '@nestjs/common';
import { CustomerMsController } from './customer-ms.controller';
import { CustomerMsService } from './customer-ms.service';

import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './models/customer.model';

export const customerProviders = [
  {
    provide: 'CUSTOMER_REPOSITORY',
    useValue: Customer,
  },
];

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: 'db/customer.sqlite',
      synchronize: true,
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature([Customer]),
  ],
  controllers: [CustomerMsController],
  providers: [CustomerMsService, ...customerProviders],
  exports: [CustomerMsService, ...customerProviders],
})
export class CustomerMsModule {}
