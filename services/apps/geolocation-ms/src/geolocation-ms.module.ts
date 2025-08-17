import { Module } from '@nestjs/common';
import { GeolocationMsController } from './geolocation-ms.controller';
import { GeolocationMsService } from './geolocation-ms.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GeoLocation } from './models/geo-location.model';

export const geolocationProviders = [
  {
    provide: 'GEOLOCATION_REPOSITORY',
    useValue: GeoLocation,
  },
];

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: 'db/geolocation.sqlite',
      synchronize: true,
      autoLoadModels: true,
    }),
    SequelizeModule.forFeature([GeoLocation]),
  ],
  controllers: [GeolocationMsController],
  providers: [GeolocationMsService, ...geolocationProviders],
  exports: [GeolocationMsService, ...geolocationProviders],
})
export class GeolocationMsModule {}
