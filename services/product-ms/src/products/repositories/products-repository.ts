import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ProductsGateway } from 'src/products/interfaces/products-gateway.interface';
import { Product } from 'src/products/models/product.model';
import { Product as ProductEntity } from 'src/products/entities/product.entity';

@Injectable()
export class ProductsRepository implements ProductsGateway {
  constructor(@InjectModel(Product) private productModel: typeof Product) {}

  async findAll(): Promise<ProductEntity[]> {
    const whereFilter = {
      deleted_at: null,
    };
    if (process.env.PROMOTION) {
      whereFilter.productCategoryName = 'beleza_saude';
    }
    const rawProducts = await this.productModel.findAll({
      where: whereFilter,
      limit: 100,
    });

    if ((rawProducts && rawProducts.length === 0) || !rawProducts) {
      throw new Error('Sem produtos hoje');
    }
    return rawProducts.map((product) => {
      return {
        id: product.productId,
        category: product.productCategoryName,
        weight: product.productWeightG,
        length: product.productLengthCm,
      };
    });
  }
}
