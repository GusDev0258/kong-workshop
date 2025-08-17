import { Module } from '@nestjs/common';
import { SeederController } from './seeder.controller';
import { SeederService } from './seeder.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerMsModule } from 'apps/customer-ms/src/customer-ms.module';
import { ProductMsModule } from 'apps/product-ms/src/product-ms.module';
import { ReviewsMsModule } from 'apps/reviews-ms/src/reviews-ms.module';
import { OrdersMsModule } from 'apps/orders-ms/src/orders-ms.module';
import { PaymentMsModule } from 'apps/payment-ms/src/payment-ms.module';
import { LeadsMsModule } from 'apps/leads-ms/src/leads-ms.module';
import { SellerMsModule } from 'apps/seller-ms/src/seller-ms.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      name: 'source_db',
      dialect: 'sqlite',
      storage: 'db/olist.sqlite',
      logging: false,
    }),
    CustomerMsModule,
    ProductMsModule,
    ReviewsMsModule,
    OrdersMsModule,
    PaymentMsModule,
    LeadsMsModule,
    SellerMsModule,
  ],
  controllers: [SeederController],
  providers: [SeederService],
})
export class SeederModule {}
