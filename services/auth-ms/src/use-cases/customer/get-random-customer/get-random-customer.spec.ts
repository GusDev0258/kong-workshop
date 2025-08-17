import { Test, TestingModule } from '@nestjs/testing';
import { GetRandomCustomerUsecase } from './get-random-customer.usecase';

describe('GetRandomCustomer', () => {
  let provider: GetRandomCustomerUsecase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetRandomCustomerUsecase],
    }).compile();

    provider = module.get<GetRandomCustomerUsecase>(GetRandomCustomerUsecase);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
