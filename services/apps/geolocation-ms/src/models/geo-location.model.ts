import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
} from 'sequelize-typescript';

@Table({
  tableName: 'geolocation',
  timestamps: true,
})
export class Geolocation extends Model {
  @PrimaryKey
  @Column({ type: DataType.STRING, field: 'geolocation_zip_code_prefix' })
  geolocationZipCodePrefix: string;

  @Column({ type: DataType.FLOAT, field: 'geolocation_lat' })
  geolocationLat: number;

  @Column({ type: DataType.FLOAT, field: 'geolocation_lng' })
  geolocationLng: number;

  @Column({ type: DataType.STRING, field: 'geolocation_city' })
  geolocationCity: string;

  @Column({ type: DataType.STRING, field: 'geolocation_state' })
  geolocationState: string;
}
