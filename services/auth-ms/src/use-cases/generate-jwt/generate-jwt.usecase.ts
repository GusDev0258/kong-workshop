import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CustomerResponse } from '../customer/dtos/customer-response.dto';

@Injectable()
export class GenerateJwtUsecase {
  constructor(private readonly jwtService: JwtService) {}

  async execute(payload: CustomerResponse): Promise<string> {
    return this.jwtService.signAsync({ ...payload });
  }
}
