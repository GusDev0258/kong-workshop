import { Module } from '@nestjs/common';
import { ProductsCategoryNameTranslationService } from './products-category-name-translation.service';
import { ProductsCategoryNameTranslationController } from './products-category-name-translation.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductCategoryNameTranslation } from './models/product-category-name-translation.model';

@Module({
  imports: [SequelizeModule.forFeature([ProductCategoryNameTranslation])],
  controllers: [ProductsCategoryNameTranslationController],
  providers: [ProductsCategoryNameTranslationService],
})
export class ProductsCategoryNameTranslationModule {}
