import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCartDto {
  @IsNumber()
  @ApiProperty()
  productId: number;

  @IsNumber()
  @ApiProperty()
  quantity: number;

  userId: number;
}
