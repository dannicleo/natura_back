import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsArray, ValidateNested, IsObject } from 'class-validator';
import { Type } from 'class-transformer';

class CartProductDto {
  @ApiProperty({ example: '1231232342' })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  quantity: number;
}

class AddressDto {
  @ApiProperty({ example: '12345678' })
  @IsString()
  @IsNotEmpty()
  zip_code: string;
}

export class CartDto {
  @ApiProperty({ type: AddressDto })
  @ValidateNested()
  @Type(() => AddressDto)
  @IsObject()
  @IsNotEmpty()
  address: AddressDto;

  @ApiProperty({ example: 'client1234' })
  @IsString()
  @IsNotEmpty()
  clientId: string;

  @ApiProperty({ example: [] })
  @IsArray()
  coupon: string[];

  @ApiProperty({ type: [CartProductDto] })
  @ValidateNested({ each: true })
  @Type(() => CartProductDto)
  @IsArray()
  @IsNotEmpty()
  products: CartProductDto[];
}