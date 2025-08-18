import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';
import { GetRandomCustomerUsecase } from 'src/use-cases/customer/get-random-customer/get-random-customer.usecase';
import { GenerateJwtUsecase } from 'src/use-cases/generate-jwt/generate-jwt.usecase';

@Controller('/api/auth')
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
    response.cookie('customer_state', customer?.state, {
      httpOnly: true,
      expires: new Date(Date.now() + 900000),
    });
    return `Customer do servidor na porta: ${process.env.PORT || 3000} ${customer.uuid} Tu mora em ${customer?.state} authenticated`;
  }
}
