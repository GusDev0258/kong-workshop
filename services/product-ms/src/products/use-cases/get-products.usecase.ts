import { Inject, Injectable } from '@nestjs/common';
import type { ProductsGateway } from 'src/products/interfaces/products-gateway.interface';
import { Product as ProductEntity } from 'src/products/entities/product.entity';

@Injectable()
export class GetProductsUseCase {
  constructor(
    @Inject('ProductsGateway') private productRepository: ProductsGateway,
  ) {}

  async execute(): Promise<ProductEntity[]> {
    return this.productRepository.findAll();
  }
}
