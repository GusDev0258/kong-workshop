import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';

@Table({
  tableName: 'sellers',
  timestamps: true,
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
})
export class Sellers extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
    field: 'seller_id',
  })
  sellerId: string;

  @Column({
    type: DataType.STRING,
    field: 'seller_zip_code_prefix',
  })
  sellerZipCodePrefix: string;

  @Column({
    type: DataType.STRING,
    field: 'seller_city',
  })
  sellerCity: string;

  @Column({
    type: DataType.STRING,
    field: 'seller_state',
  })
  sellerState: string;
}
