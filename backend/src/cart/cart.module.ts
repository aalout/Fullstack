import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';
import { ProductEntity } from 'src/product_cards/entities/product_card.entity';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([CartEntity, ProductEntity]),
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
