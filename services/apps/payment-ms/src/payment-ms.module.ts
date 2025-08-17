import { Module } from '@nestjs/common';
import { PaymentMsController } from './payment-ms.controller';
import { PaymentMsService } from './payment-ms.service';
import { OrderPayment } from './models/order-payment.model';
import { SequelizeModule } from '@nestjs/sequelize';

export const paymentProviders = [
  {
    provide: 'ORDER_PAYMENTS_REPOSITORY',
    useValue: OrderPayment,
  },
];

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: 'db/payments.sqlite',
      synchronize: true,
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature([OrderPayment]),
  ],
  controllers: [PaymentMsController],
  providers: [PaymentMsService, ...paymentProviders],
  exports: [PaymentMsService, ...paymentProviders],
})
export class PaymentMsModule {}
