import { UsersService } from './../../users/services/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { User } from 'src/modules/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService, private readonly jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);

    if (user && (await compare(password, user.password!))) {
      return user;
    }

    return null;
  }

  login(user: any) {
    const { id, password, ...data } = user;
    const payload = {
      sub: id,
      name: `${user.name}, ${user.lastName}`,
      email: user.email,
    };

    return {
      data,
      accessToken: this.jwtService.sign(payload),
    };
  }
}
