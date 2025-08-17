import { Test, TestingModule } from '@nestjs/testing';
import { LeadsMsController } from './leads-ms.controller';
import { LeadsMsService } from './leads-ms.service';

describe('LeadsMsController', () => {
  let leadsMsController: LeadsMsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LeadsMsController],
      providers: [LeadsMsService],
    }).compile();

    leadsMsController = app.get<LeadsMsController>(LeadsMsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(leadsMsController.getHello()).toBe('Hello World!');
    });
  });
});
