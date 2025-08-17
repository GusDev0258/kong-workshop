import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ProductCategoryNameTranslation } from './product-category-name-translation.model';
// O OrderItem virá de outro microserviço, então não o importamos para relação de banco de dados.

@Table({ tableName: 'products', timestamps: true })
export class Product extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
    field: 'product_id',
  })
  productId: string;

  @ForeignKey(() => ProductCategoryNameTranslation)
  @Column({
    type: DataType.STRING,
    field: 'product_category_name',
  })
  productCategoryName: string;

  @Column({
    type: DataType.INTEGER,
    field: 'product_name_length',
  })
  productNameLength: number;

  @Column({
    type: DataType.INTEGER,
    field: 'product_description_length',
  })
  productDescriptionLength: number;

  @Column({
    type: DataType.INTEGER,
    field: 'product_photos_qty',
  })
  productPhotosQty: number;

  @Column({
    type: DataType.FLOAT,
    field: 'product_weight_g',
  })
  productWeightG: number;

  @Column({
    type: DataType.FLOAT,
    field: 'product_length_cm',
  })
  productLengthCm: number;

  @Column({
    type: DataType.FLOAT,
    field: 'product_height_cm',
  })
  productHeightCm: number;

  @Column({
    type: DataType.FLOAT,
    field: 'product_width_cm',
  })
  productWidthCm: number;

  @BelongsTo(() => ProductCategoryNameTranslation)
  categoryTranslation: ProductCategoryNameTranslation;
}
