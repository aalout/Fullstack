import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('news')
export class NewsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  image: string;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  newsTime: Date;
}
