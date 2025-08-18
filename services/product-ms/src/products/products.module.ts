import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './models/product.model';
import { ProductsRepository } from './repositories/products-repository';
import { GetProductsUseCase } from './use-cases/get-products.usecase';

@Module({
  imports: [SequelizeModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [
    {
      provide: 'ProductsGateway',
      useClass: ProductsRepository,
    },
    GetProductsUseCase,
  ],
})
export class ProductsModule {}
