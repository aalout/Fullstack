import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { ProductService } from './product_cards.service';
import { ProductController } from './product_cards.controller';
import { ProductEntity } from './entities/product_card.entity';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
