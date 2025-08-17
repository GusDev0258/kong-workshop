import { Module } from '@nestjs/common';
import { SellerMsController } from './seller-ms.controller';
import { SellerMsService } from './seller-ms.service';
import { Sellers } from './models/sellers.model';
import { SequelizeModule } from '@nestjs/sequelize';

export const sellerProviders = [
  {
    provide: 'SELLER_REPOSITORY',
    useValue: Sellers,
  },
];

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: 'db/sellers.sqlite',
      synchronize: true,
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature([Sellers]),
  ],
  controllers: [SellerMsController],
  providers: [SellerMsService, ...sellerProviders],
  exports: [SellerMsService, ...sellerProviders],
})
export class SellerMsModule {}
