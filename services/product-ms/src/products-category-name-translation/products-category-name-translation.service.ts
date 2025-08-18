import { Injectable } from '@nestjs/common';
import { CreateProductsCategoryNameTranslationDto } from './dto/create-products-category-name-translation.dto';
import { UpdateProductsCategoryNameTranslationDto } from './dto/update-products-category-name-translation.dto';

@Injectable()
export class ProductsCategoryNameTranslationService {
  create(createProductsCategoryNameTranslationDto: CreateProductsCategoryNameTranslationDto) {
    return 'This action adds a new productsCategoryNameTranslation';
  }

  findAll() {
    return `This action returns all productsCategoryNameTranslation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productsCategoryNameTranslation`;
  }

  update(id: number, updateProductsCategoryNameTranslationDto: UpdateProductsCategoryNameTranslationDto) {
    return `This action updates a #${id} productsCategoryNameTranslation`;
  }

  remove(id: number) {
    return `This action removes a #${id} productsCategoryNameTranslation`;
  }
}
