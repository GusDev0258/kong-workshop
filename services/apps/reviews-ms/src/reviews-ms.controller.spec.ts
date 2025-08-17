import { Test, TestingModule } from '@nestjs/testing';
import { ReviewsMsController } from './reviews-ms.controller';
import { ReviewsMsService } from './reviews-ms.service';

describe('ReviewsMsController', () => {
  let reviewsMsController: ReviewsMsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReviewsMsController],
      providers: [ReviewsMsService],
    }).compile();

    reviewsMsController = app.get<ReviewsMsController>(ReviewsMsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(reviewsMsController.getHello()).toBe('Hello World!');
    });
  });
});
