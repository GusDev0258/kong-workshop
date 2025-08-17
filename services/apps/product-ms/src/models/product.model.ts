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
  @Column(DataType.STRING)
  productId: string;

  @ForeignKey(() => ProductCategoryNameTranslation)
  @Column(DataType.STRING)
  productCategoryName: string;

  @Column(DataType.INTEGER)
  productNameLenght: number;

  @Column(DataType.INTEGER)
  productDescriptionLenght: number;

  @Column(DataType.INTEGER)
  productPhotosQty: number;

  @Column(DataType.FLOAT)
  productWeightG: number;

  @Column(DataType.FLOAT)
  productLengthCm: number;

  @Column(DataType.FLOAT)
  productHeightCm: number;

  @Column(DataType.FLOAT)
  productWidthCm: number;

  @BelongsTo(() => ProductCategoryNameTranslation)
  categoryTranslation: ProductCategoryNameTranslation;
}
