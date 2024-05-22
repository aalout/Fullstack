import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { UserRole } from '../guards/user-role.enum';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { id: string; roles: { name: string }[] }) {
    const user = await this.userService.findById(+payload.id);

    if (!user) {
      throw new UnauthorizedException('У вас нет доступа');
    }

    const rolesArray = payload.roles.map((role) => {
      if (typeof role.name === 'string') {
        switch (role.name.toLowerCase()) {
          case 'user':
            return UserRole.USER;
          case 'admin':
            return UserRole.ADMIN;
          default:
            return null;
        }
      } else {
        return null;
      }
    });

    user.roles = rolesArray.filter((role) => role !== null);

    return {
      id: user.id,
      roles: user.roles,
    };
  }
}
