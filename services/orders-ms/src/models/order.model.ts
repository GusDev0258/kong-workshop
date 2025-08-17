import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import { OrderItem } from './order-item.model';

@Table({ tableName: 'orders', timestamps: true })
export class Order extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
    field: 'order_id',
  })
  orderId: string;

  @Column({
    type: DataType.STRING,
    field: 'customer_id',
  })
  customerId: string;

  @Column({
    type: DataType.STRING,
    field: 'order_status',
  })
  orderStatus: string;

  @Column({
    type: DataType.DATE,
    field: 'order_purchase_timestamp',
  })
  orderPurchaseTimestamp: Date;

  @Column({
    type: DataType.DATE,
    field: 'order_approved_at',
  })
  orderApprovedAt: Date;

  @Column({
    type: DataType.DATE,
    field: 'order_delivered_carrier_date',
  })
  orderDeliveredCarrierDate: Date;

  @Column({
    type: DataType.DATE,
    field: 'order_delivered_customer_date',
  })
  orderDeliveredCustomerDate: Date;

  @Column({
    type: DataType.DATE,
    field: 'order_estimated_delivery_date',
  })
  orderEstimatedDeliveryDate: Date;

  @HasMany(() => OrderItem)
  items: OrderItem[];
}
