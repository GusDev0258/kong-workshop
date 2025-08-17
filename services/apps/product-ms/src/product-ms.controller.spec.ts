import { Test, TestingModule } from '@nestjs/testing';
import { ProductMsController } from './product-ms.controller';
import { ProductMsService } from './product-ms.service';

describe('ProductMsController', () => {
  let productMsController: ProductMsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProductMsController],
      providers: [ProductMsService],
    }).compile();

    productMsController = app.get<ProductMsController>(ProductMsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(productMsController.getHello()).toBe('Hello World!');
    });
  });
});
