import { BadRequestException, Injectable } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as fs from 'fs';

import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsEntity } from './entities/news.entity';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(NewsEntity)
    private repository: Repository<NewsEntity>,
  ) {}

  async create(
    dto: CreateNewsDto,
    image: Express.Multer.File,
  ): Promise<NewsEntity> {
    return this.repository.save({
      image: image.filename,
      title: dto.news_name,
      text: dto.news_text,
      newsTime: new Date(),
    });
  }

  async findAll(): Promise<NewsEntity[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<NewsEntity> {
    return this.repository.findOneBy({ id });
  }

  async update(id: number, dto: UpdateNewsDto, image: Express.Multer.File) {
    const toUpdate = await this.repository.findOneBy({ id });
    if (!toUpdate) {
      throw new BadRequestException(`Записи с id=${id} не найдено`);
    }
    if (dto.news_text) {
      toUpdate.text = dto.news_text;
    }
    if (dto.news_name) {
      toUpdate.title = dto.news_name;
    }
    if (image) {
      if (toUpdate.image !== image.filename) {
        fs.unlink(`X_images/news/${toUpdate.image}`, (err) => {
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
