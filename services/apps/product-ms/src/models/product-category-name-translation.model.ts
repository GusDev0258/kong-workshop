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
  @Column({
    type: DataType.STRING,
    field: 'product_category_name',
  })
  productCategoryName: string;

  @Column({
    type: DataType.STRING,
    field: 'product_category_name_english',
  })
  productCategoryNameEnglish: string;

  @HasMany(() => Product)
  products: Product[];
}
