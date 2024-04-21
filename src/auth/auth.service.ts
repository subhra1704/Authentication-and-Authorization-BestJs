import { Injectable } from '@nestjs/common';
import { UserServices } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserServices,
    private readonly jwtService: JwtService,
  ) {}

  generateToken(payload: User): string {
    return this.jwtService.sign(payload);
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUserByUserName(username);
    if (user && bcrypt.compareSync(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
