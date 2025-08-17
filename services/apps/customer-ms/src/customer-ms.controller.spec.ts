import { Test, TestingModule } from '@nestjs/testing';
import { CustomerMsController } from './customer-ms.controller';
import { CustomerMsService } from './customer-ms.service';

describe('CustomerMsController', () => {
  let customerMsController: CustomerMsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CustomerMsController],
      providers: [CustomerMsService],
    }).compile();

    customerMsController = app.get<CustomerMsController>(CustomerMsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(customerMsController.getHello()).toBe('Hello World!');
    });
  });
});
