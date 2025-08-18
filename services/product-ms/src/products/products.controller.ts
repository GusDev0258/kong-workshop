import { Controller, Get, Headers, Req } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { GetProductsUseCase } from './use-cases/get-products.usecase';
import type { Request } from 'express';

@Controller('/api/products')
export class ProductsController {
  constructor(private readonly getProductsUseCase: GetProductsUseCase) {}

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.getProductsUseCase.execute();
  }
}
