import { Test, TestingModule } from '@nestjs/testing';
import { GenerateJwtUseCase } from './generate-jwt.usecase';

describe('GenerateJwtUseCase', () => {
  let provider: GenerateJwtUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenerateJwtUseCase],
    }).compile();

    provider = module.get<GenerateJwtUseCase>(GenerateJwtUseCase);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
