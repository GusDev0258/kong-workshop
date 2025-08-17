import { Module } from '@nestjs/common';
import { GenerateJwtUsecase } from './generate-jwt/generate-jwt.usecase';
import { GetRandomCustomerUsecase } from './customer/get-random-customer/get-random-customer.usecase';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CUSTOMER_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'workshop',
          protoPath: join(__dirname, '..', 'proto', 'customer.proto'),
          url: 'localhost:50051',
        },
      },
    ]),
    JwtModule.register({
      secret: '0a67fa495a3084bbc09d77f1fa5e9168fdd461bc',
      signOptions: {
        expiresIn: '1h',
      },
    }),
  ],
  providers: [GenerateJwtUsecase, GetRandomCustomerUsecase],
  exports: [GenerateJwtUsecase, GetRandomCustomerUsecase],
})
export class UseCasesModule {}
