import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsString, IsInt, Min } from 'class-validator';

export class QueryProductDto {

    @ApiProperty({
      description: 'Número máximo de produtos a serem retornados',
      example: 10,
    })
    @Type(() => Number)
    @IsInt()
    @Min(1)
    limit: number;
  
    @ApiProperty({
      description: 'Índice inicial dos produtos a serem retornados',
      example: 0,
    })
    @Type(() => Number)
    @IsInt()
    @Min(0)
    start: number;
  
    @ApiPropertyOptional({
      description: 'Nome do produto para filtro',
      example: 'Perfume',
    })
    @IsOptional()
    @IsString()
    name?: string;
    
  }