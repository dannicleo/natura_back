import {
    IsUUID,
    IsString,
    IsNotEmpty,
    IsDecimal,
    IsInt,
    IsOptional
  } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

  export class CreateProductDto {

    @ApiProperty({
        description: 'Um ID especial para apresentar o produto',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    productIdView: string;
  
    @ApiProperty({
        description: 'Um nome para o produto',
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @ApiProperty({
        description: 'Uma descrição detalhada do produto',
        required: true,
    })
    @IsString()
    description: string;
  
    @ApiProperty({
        description: 'O valor do produto',
        required: true,
    })
    @IsDecimal()
    price: number;
  
    @ApiProperty({
        description: 'A quantidade em unidades do produto',
        required: true,
    })
    @IsInt()
    stock: number;
  
    @ApiProperty({
        description: 'A marca do produto',
        required: true,
    })
    @IsString()
    brand: string;
  
    @ApiProperty({
        description: 'Categoria do produto',
        required: true,
    })
    @IsUUID()
    categoryId: string;
  
    @ApiProperty({
        description: 'Um array com uma lista de imagens do produto'
    })
    @IsOptional()
    images?: any;
  
  }
