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

import { fileStorage } from './storage';
import { CreateProductDto } from './dto/create-product_card.dto';
import { UpdateProductCardDto } from './dto/update-product_card.dto';
import { ProductEntity } from './entities/product_card.entity';
import { DeleteResult } from 'typeorm';
import { ProductService } from './product_cards.service';
import { ApiBearerAuth } from '@nestjs/swagger';

import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UserRole } from '../auth/guards/user-role.enum';
import { Roles } from '../decorators/roles.decorator';

@ApiTags('Product')
@Controller('Product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: fileStorage }))
  create(
    @Body() dto: CreateProductDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<ProductEntity> {
    return this.productService.create(dto, image);
  }

  @Get()
  findAll(): Promise<ProductEntity[]> {
    return this.productService.findAll();
  }

  @Get('/image/:path')
  download(@Param('path') path: string, @Response() response) {
    return response.sendFile(path, { root: './X_images/Product' });
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProductEntity> {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('image', { storage: fileStorage }))
  update(
    @Param('id') id: string,
    @Body() dto: UpdateProductCardDto,
    @UploadedFile() image: Express.Multer.File,
  ): Promise<ProductEntity> {
    return this.productService.update(+id, dto, image);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  remove(@Param('id') id: string): Promise<DeleteResult> {
    return this.productService.delete(+id);
  }
}
