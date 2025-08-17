import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Order } from './order.model';

@Table({
  tableName: 'order_items',
  timestamps: true,
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
})
export class OrderItem extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.BIGINT,
    field: 'order_item_id',
  })
  orderItemId: number;

  @ForeignKey(() => Order)
  @Column({
    type: DataType.STRING,
    field: 'order_id',
  })
  orderId: string;

  @Column({
    type: DataType.STRING,
    field: 'product_id',
  })
  productId: string;

  @Column({
    type: DataType.STRING,
    field: 'seller_id',
  })
  sellerId: string;

  @Column({
    type: DataType.FLOAT,
    field: 'price',
  })
  price: number;

  @BelongsTo(() => Order)
  order: Order;
}
