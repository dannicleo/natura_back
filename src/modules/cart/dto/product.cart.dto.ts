import { IsDecimal, IsInt, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";

export class ProductDto {
    @IsUUID()
    id: string;

    @IsString()
    @IsNotEmpty()
    productIdView: string;

    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    description: string;
  
    @IsDecimal()
    price: number;
    
    @IsInt()
    stock: number;
  
    @IsString()
    brand: string;
  
    @IsUUID()
    categoryId: string;
  
    @IsOptional()
    images?: any;

  }