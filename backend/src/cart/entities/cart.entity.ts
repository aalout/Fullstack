import { ApiHideProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from 'src/product_cards/entities/product_card.entity';

@Entity('cart')
export class CartEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiHideProperty()
  @OneToMany(() => ProductEntity, (product) => product.cart)
  products: ProductEntity[];

  @Column()
  productId: number;

  @Column()
  userId: number;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  title: string;

  @Column()
  image: string;
}
