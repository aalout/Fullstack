import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from '../../category/entities/category.entity';
import { CartEntity } from '../../cart/entities/cart.entity';
import { ApiHideProperty } from '@nestjs/swagger';

@Entity('product_card')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  title: string;

  @Column()
  text: string;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  @JoinColumn({ name: 'category' })
  category: CategoryEntity;

  @ApiHideProperty()
  @ManyToOne(() => CartEntity, (cart) => cart.products)
  cart: CartEntity;

  @Column()
  price: number;
}
