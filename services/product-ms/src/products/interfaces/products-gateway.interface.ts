import { Product } from '../entities/product.entity';

export interface ProductsGateway {
  findAll(): Promise<Product[]>;
}
