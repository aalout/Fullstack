import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { NewsEntity } from './entities/news.entity';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([NewsEntity])],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}
