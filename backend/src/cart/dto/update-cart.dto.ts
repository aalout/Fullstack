import { PartialType } from '@nestjs/swagger';
import { CreateCartDto } from './create-cart.dto';

export class UpdatecartDto extends PartialType(CreateCartDto) {}
