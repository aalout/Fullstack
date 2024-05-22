import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateNewsDto {
  @ApiProperty({
    type: 'file',
    properties: {
      file: {
        type: 'string',
        format: 'binary',
      },
    },
  })
  image: Express.Multer.File;

  @IsString()
  news_name: string = 'Название новости';

  @IsString()
  news_text: string = 'Описание новости';
}
