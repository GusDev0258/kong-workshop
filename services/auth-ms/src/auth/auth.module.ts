import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UseCasesModule } from 'src/use-cases/use-cases.module';
import { GenerateJwtUsecase } from 'src/use-cases/generate-jwt/generate-jwt.usecase';
import { GetRandomCustomerUsecase } from 'src/use-cases/customer/get-random-customer/get-random-customer.usecase';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    UseCasesModule,
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
  controllers: [AuthController],
  providers: [GenerateJwtUsecase, GetRandomCustomerUsecase],
})
export class AuthModule {}
