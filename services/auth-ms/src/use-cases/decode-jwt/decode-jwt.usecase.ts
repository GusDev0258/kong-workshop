import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class DecodeJwtUsecase {
  constructor(private readonly jwtService: JwtService) {}

  async execute(token: string): Promise<any> {
    try {
      return await this.jwtService.verifyAsync(token, {
        secret: '0a67fa495a3084bbc09d77f1fa5e9168fdd461bc',
      });
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
