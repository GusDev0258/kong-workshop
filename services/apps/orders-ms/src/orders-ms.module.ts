import { Module } from '@nestjs/common';
import { OrdersMsController } from './orders-ms.controller';
import { OrdersMsService } from './orders-ms.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './models/order.model';
import { OrderItem } from './models/order-item.model';

export const ordersProviders = [
  {
    provide: 'ORDERS_REPOSITORY',
    useValue: Order,
  },
  {
    provide: 'ORDERS_ITEM_REPOSITORY',
    useValue: OrderItem,
  },
];

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: 'db/orders.sqlite',
      synchronize: true,
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature([Order, OrderItem]),
  ],
  controllers: [OrdersMsController],
  providers: [OrdersMsService, ...ordersProviders],
  exports: [OrdersMsService, ...ordersProviders],
})
export class OrdersMsModule {}
