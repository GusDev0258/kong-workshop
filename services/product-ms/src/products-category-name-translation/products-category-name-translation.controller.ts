import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsCategoryNameTranslationService } from './products-category-name-translation.service';
import { CreateProductsCategoryNameTranslationDto } from './dto/create-products-category-name-translation.dto';
import { UpdateProductsCategoryNameTranslationDto } from './dto/update-products-category-name-translation.dto';

@Controller('products-category-name-translation')
export class ProductsCategoryNameTranslationController {
  constructor(private readonly productsCategoryNameTranslationService: ProductsCategoryNameTranslationService) {}

  @Post()
  create(@Body() createProductsCategoryNameTranslationDto: CreateProductsCategoryNameTranslationDto) {
    return this.productsCategoryNameTranslationService.create(createProductsCategoryNameTranslationDto);
  }

  @Get()
  findAll() {
    return this.productsCategoryNameTranslationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsCategoryNameTranslationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductsCategoryNameTranslationDto: UpdateProductsCategoryNameTranslationDto) {
    return this.productsCategoryNameTranslationService.update(+id, updateProductsCategoryNameTranslationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsCategoryNameTranslationService.remove(+id);
  }
}
