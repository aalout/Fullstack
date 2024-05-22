import { BadRequestException, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';

import { CreateProductDto } from './dto/create-product_card.dto';
import { UpdateProductCardDto } from './dto/update-product_card.dto';
import { ProductEntity } from './entities/product_card.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private repository: Repository<ProductEntity>,
  ) {}

  async create(
    dto: CreateProductDto,
    image: Express.Multer.File,
  ): Promise<ProductEntity> {
    return this.repository.create({
      image: image.filename,
      title: dto.product_name,
      text: dto.product_text,
      category: { id: dto.category },
      price: dto.price,
    });
  }

  async findAll(): Promise<ProductEntity[]> {
    return this.repository.find({
      relations: ['category'],
    });
  }

  async findOne(id: number): Promise<ProductEntity> {
    return this.repository.findOneBy({ id });
  }

  async update(
    id: number,
    dto: UpdateProductCardDto,
    image: Express.Multer.File,
  ) {
    const toUpdate = await this.repository.findOneBy({ id });
    if (!toUpdate) {
      throw new BadRequestException(`Записи с id=${id} не найдено`);
    }
    if (dto.product_text) {
      toUpdate.text = dto.product_text;
    }
    if (dto.product_name) {
      toUpdate.title = dto.product_name;
    }
    if (dto.price) {
      toUpdate.price = dto.price;
    }
    if (image) {
      if (toUpdate.image !== image.filename) {
        fs.unlink(`X_images/Product/${toUpdate.image}`, (err) => {
          if (err) {
            console.error(err);
          }
        });
      }
      toUpdate.image = image.filename;
    }
    return this.repository.save(toUpdate);
  }

  async delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
