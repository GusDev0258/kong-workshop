import { Module } from '@nestjs/common';
import { GenerateJwt } from './generate-jwt/generate-jwt.usecase';

@Module({
  providers: [GenerateJwt],
})
export class UseCasesModule {}
