import { Module } from '@nestjs/common';
import { GeolocationMsController } from './geolocation-ms.controller';
import { GeolocationMsService } from './geolocation-ms.service';

@Module({
  imports: [],
  controllers: [GeolocationMsController],
  providers: [GeolocationMsService],
})
export class GeolocationMsModule {}
