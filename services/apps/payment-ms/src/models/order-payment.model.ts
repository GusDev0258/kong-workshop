import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({ tableName: 'order_payments', timestamps: true })
export class OrderPayment extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    field: 'payment_id',
  })
  paymentId: number;

  @Column({
    type: DataType.STRING,
    field: 'order_id',
  })
  orderId: string;

  @Column({
    type: DataType.INTEGER,
    field: 'payment_sequential',
  })
  paymentSequential: number;

  @Column({
    type: DataType.STRING,
    field: 'payment_type',
  })
  paymentType: string;

  @Column({
    type: DataType.INTEGER,
    field: 'payment_installments',
  })
  paymentInstallments: number;

  @Column({
    type: DataType.FLOAT,
    field: 'payment_value',
  })
  paymentValue: number;
}
