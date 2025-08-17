import { Test, TestingModule } from '@nestjs/testing';
import { PaymentMsController } from './payment-ms.controller';
import { PaymentMsService } from './payment-ms.service';

describe('PaymentMsController', () => {
  let paymentMsController: PaymentMsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PaymentMsController],
      providers: [PaymentMsService],
    }).compile();

    paymentMsController = app.get<PaymentMsController>(PaymentMsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(paymentMsController.getHello()).toBe('Hello World!');
    });
  });
});
