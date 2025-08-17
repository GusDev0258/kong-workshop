import { Test, TestingModule } from '@nestjs/testing';
import { OrdersMsController } from './orders-ms.controller';
import { OrdersMsService } from './orders-ms.service';

describe('OrdersMsController', () => {
  let ordersMsController: OrdersMsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrdersMsController],
      providers: [OrdersMsService],
    }).compile();

    ordersMsController = app.get<OrdersMsController>(OrdersMsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(ordersMsController.getHello()).toBe('Hello World!');
    });
  });
});
