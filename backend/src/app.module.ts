import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { getPostgresConfig } from './config/postgres.config';
import { PromoModule } from './promo/promo.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product_cards/product_cards.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { CorsMiddleware } from './cors.middleware';
import { NestModule, MiddlewareConsumer } from '@nestjs/common';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getPostgresConfig,
    }),
    PromoModule,
    CategoryModule,
    ProductModule,
    AuthModule,
    UsersModule,
    CartModule,
    OrderModule,
    NewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorsMiddleware).forRoutes('*');
  }
}
