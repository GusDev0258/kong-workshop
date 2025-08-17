import { Controller, Get } from '@nestjs/common';
import { GeolocationMsService } from './geolocation-ms.service';

@Controller()
export class GeolocationMsController {
  constructor(private readonly geolocationMsService: GeolocationMsService) {}

  @Get()
  getHello(): string {
    return this.geolocationMsService.getHello();
  }
}
