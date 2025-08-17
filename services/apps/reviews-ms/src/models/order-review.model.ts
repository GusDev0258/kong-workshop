import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({ tableName: 'order_reviews', timestamps: true })
export class OrderReview extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  reviewId: string;

  @Column(DataType.STRING)
  orderId: string;

  @Column(DataType.INTEGER)
  reviewScore: number;

  @Column(DataType.STRING)
  reviewCommentTitle: string;

  @Column(DataType.TEXT)
  reviewCommentMessage: string;

  @Column(DataType.DATE)
  reviewCreationDate: Date;

  @Column(DataType.DATE)
  reviewAnswerTimestamp: Date;
}
