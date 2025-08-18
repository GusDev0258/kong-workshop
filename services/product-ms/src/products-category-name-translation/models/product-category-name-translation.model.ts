import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import { Product } from '../../products/models/product.model';

@Table({
  tableName: 'product_category_name_translation',
  timestamps: true,
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
})
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
