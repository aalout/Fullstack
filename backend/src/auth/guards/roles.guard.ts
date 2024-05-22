import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
//import { UserRole } from '../guards/user-role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user || !user.roles) {
      return false;
    }

    console.log('User roles:', user.roles);

    const hasRequiredRole = roles.some((requiredRole) =>
      user.roles.some((userRole) => userRole === requiredRole),
    );

    return hasRequiredRole;
  }
}
