import { Module } from '@nestjs/common';
import { ReviewsMsController } from './reviews-ms.controller';
import { ReviewsMsService } from './reviews-ms.service';
import { OrderReview } from './models/order-review.model';
import { SequelizeModule } from '@nestjs/sequelize';

export const reviewsProviders = [
  {
    provide: 'ORDER_REVIEWS_REPOSITORY',
    useValue: OrderReview,
  },
];

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: 'db/reviews.sqlite',
      synchronize: true,
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature([OrderReview]),
  ],
  controllers: [ReviewsMsController],
  providers: [ReviewsMsService, ...reviewsProviders],
})
export class ReviewsMsModule {}
