import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsCategoryNameTranslationDto } from './create-products-category-name-translation.dto';

export class UpdateProductsCategoryNameTranslationDto extends PartialType(CreateProductsCategoryNameTranslationDto) {}
