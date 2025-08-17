import { Test, TestingModule } from '@nestjs/testing';
import { SellerMsController } from './seller-ms.controller';
import { SellerMsService } from './seller-ms.service';

describe('SellerMsController', () => {
  let sellerMsController: SellerMsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SellerMsController],
      providers: [SellerMsService],
    }).compile();

    sellerMsController = app.get<SellerMsController>(SellerMsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sellerMsController.getHello()).toBe('Hello World!');
    });
  });
});
