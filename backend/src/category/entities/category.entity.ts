import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { ProductEntity } from '../../product_cards/entities/product_card.entity';
import { ApiHideProperty } from '@nestjs/swagger';

@Entity('category')
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ApiHideProperty()
  @OneToMany(() => ProductEntity, (product) => product.category, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  products: ProductEntity[];
}
