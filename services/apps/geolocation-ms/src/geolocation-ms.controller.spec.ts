import { Test, TestingModule } from '@nestjs/testing';
import { GeolocationMsController } from './geolocation-ms.controller';
import { GeolocationMsService } from './geolocation-ms.service';

describe('GeolocationMsController', () => {
  let geolocationMsController: GeolocationMsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GeolocationMsController],
      providers: [GeolocationMsService],
    }).compile();

    geolocationMsController = app.get<GeolocationMsController>(GeolocationMsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(geolocationMsController.getHello()).toBe('Hello World!');
    });
  });
});
