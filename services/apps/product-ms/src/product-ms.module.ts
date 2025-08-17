import { Module } from '@nestjs/common';
import { ProductMsController } from './product-ms.controller';
import { ProductMsService } from './product-ms.service';
import { Product } from './models/product.model';
import { ProductCategoryNameTranslation } from './models/product-category-name-translation.model';
import { SequelizeModule } from '@nestjs/sequelize';

export const productProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useValue: Product,
  },
  {
    provide: 'PRODUCT_CATEGORY_NAME_REPOSITORY',
    useValue: ProductCategoryNameTranslation,
  },
];

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: 'db/products.sqlite',
      synchronize: true,
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature([Product, ProductCategoryNameTranslation]),
  ],
  controllers: [ProductMsController],
  providers: [ProductMsService, ...productProviders],
  exports: [ProductMsService, ...productProviders],
})
export class ProductMsModule {}
