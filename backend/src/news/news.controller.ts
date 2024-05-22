import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Response,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

import { NewsService } from './news.service';
import { fileStorage } from './storage';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { NewsEntity } from './entities/news.entity';
import { DeleteResult } from 'typeorm';

import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UserRole } from '../auth/guards/user-role.enum';
import { Roles } from '../decorators/roles.decorator';

@ApiTags('news')
@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: fileStorage }))
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  create(
    @Body() dto: CreateNewsDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<NewsEntity> {
    return this.newsService.create(dto, image);
  }

  @Get()
  findAll(): Promise<NewsEntity[]> {
    return this.newsService.findAll();
  }

  @Get('/image/:path')
  download(@Param('path') path: string, @Response() response) {
    return response.sendFile(path, { root: './X_images/news' });
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<NewsEntity> {
    return this.newsService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: fileStorage }))
  update(
    @Param('id') id: string,
    @Body() dto: UpdateNewsDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<NewsEntity> {
    return this.newsService.update(+id, dto, image);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.newsService.delete(+id);
  }
}
