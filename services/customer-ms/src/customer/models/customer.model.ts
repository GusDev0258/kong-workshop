import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'customers',
  timestamps: true,
  paranoid: true,

  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
})
export class Customer extends Model {
  @PrimaryKey
  @Column({ type: DataType.STRING, field: 'customer_unique_id' })
  customerUniqueId: string;

  @Column({
    type: DataType.STRING,
    field: 'customer_id',
  })
  customerId: string;

  @Column({
    type: DataType.STRING,
    field: 'customer_zip_code_prefix',
  })
  customerZipCodePrefix: string;

  @Column({
    type: DataType.STRING,
    field: 'customer_city',
  })
  customerCity: string;

  @Column({
    type: DataType.STRING,
    field: 'customer_state',
  })
  customerState: string;
}
