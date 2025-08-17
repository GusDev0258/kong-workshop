import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  tableName: 'order_reviews',
  timestamps: true,
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
})
export class OrderReview extends Model {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
    field: 'review_id',
  })
  reviewId: string;

  @Column({
    type: DataType.STRING,
    field: 'order_id',
  })
  orderId: string;

  @Column({
    type: DataType.INTEGER,
    field: 'review_score',
  })
  reviewScore: number;

  @Column({
    type: DataType.STRING,
    field: 'review_comment_title',
  })
  reviewCommentTitle: string;

  @Column({
    type: DataType.TEXT,
    field: 'review_comment_message',
  })
  reviewCommentMessage: string;

  @Column({
    type: DataType.DATE,
    field: 'review_creation_date',
  })
  reviewCreationDate: Date;

  @Column({
    type: DataType.DATE,
    field: 'review_answer_timestamp',
  })
  reviewAnswerTimestamp: Date;
}
