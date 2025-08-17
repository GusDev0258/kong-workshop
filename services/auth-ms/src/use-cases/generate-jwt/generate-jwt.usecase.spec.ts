import { Test, TestingModule } from '@nestjs/testing';
import { GenerateJwtUsecase } from './generate-jwt.usecase';

describe('GenerateJwtUseCase', () => {
  let provider: GenerateJwtUsecase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateJwtUsecase],
    }).compile();

    provider = module.get<GenerateJwtUsecase>(GenerateJwtUsecase);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
