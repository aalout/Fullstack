import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product_card.dto';

export class UpdateProductCardDto extends PartialType(CreateProductDto) {}
