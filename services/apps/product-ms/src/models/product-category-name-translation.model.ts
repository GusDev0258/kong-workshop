import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import { Product } from './product.model';

@Table({ tableName: 'product_category_name_translation', timestamps: true })
export class ProductCategoryNameTranslation extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  productCategoryName: string;

  @Column(DataType.STRING)
  productCategoryNameEnglish: string;

  @HasMany(() => Product)
  products: Product[];
}
