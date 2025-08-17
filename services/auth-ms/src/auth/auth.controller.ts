import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { GetRandomCustomerUsecase } from 'src/use-cases/customer/get-random-customer/get-random-customer.usecase';
import { GenerateJwtUsecase } from 'src/use-cases/generate-jwt/generate-jwt.usecase';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly generateJwtUsecase: GenerateJwtUsecase,
    private readonly getRandomCustomerUsecase: GetRandomCustomerUsecase,
  ) {}

  @Get()
  async authenticate(@Res({ passthrough: true }) response: Response) {
    const customer = await this.getRandomCustomerUsecase.execute();
    const token = await this.generateJwtUsecase.execute(customer);
    response.cookie('access_token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + 900000),
    });
    return `Customer ${customer.uuid} authenticated`;
  }
}
