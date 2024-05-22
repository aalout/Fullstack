import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CorsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.method === 'OPTIONS') {
      // Handle preflight requests for CORS
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS, PATCH',
      );
      res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization',
      );
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      res.status(204).send();
    } else {
      // Handle regular requests
      res.setHeader('Access-Control-Allow-Origin', '*');
      next();
    }
  }
}
