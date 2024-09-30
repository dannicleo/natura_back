import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/common/database/PrismaService';
import { QueryProductDto } from './dto/query-product.dto';

@Injectable()
export class ProductService {

  constructor(
    private readonly prisma: PrismaService
  ){} 

  async create(createProductDto: CreateProductDto) {
    const productCreated = await this.prisma.product.create({
      data: {
        name: createProductDto.name,
        productIdView: createProductDto.productIdView,
        description: createProductDto.description,
        price: createProductDto.price,
        stock: createProductDto.stock,
        brand: createProductDto.brand,
        category: {
          connect: {
            id: createProductDto.categoryId
          }
        },
        images: createProductDto.images,
      }
    })
    return productCreated;
  }

  async findAll(query: QueryProductDto) {
    const { limit, start, name } = query;
    const where: any = {}
    if (name) {
      where.OR = [
        {
          productIdView: {
            contains: name,
            mode: 'insensitive',
          },
        },
        {
          name: {
            contains: name,
            mode: 'insensitive',
          },
        },
        {
          description: {
            contains: name,
            mode: 'insensitive',
          },
        },
        {
          brand: {
            contains: name,
            mode: 'insensitive',
          },
        },
      ];
    }
  
    const [ rawProducts, totalCount ] = await Promise.all([
      this.prisma.product.findMany({
        where,
        skip: +start,
        take: +limit,
        include:{
          category: true
        }
      }),
      this.prisma.product.count()
    ])

    const products = rawProducts.map((product) => { 
      const mapProduct = {
        id: product.id,
        productIdView: product.productIdView,
        name: product.name,
        description: product.description,
        price: product.price,
        stock: product.stock,
        brand: product.brand,
        category: {
          id: product.category.id,
          description: product.category.description
        },
        images: product.images,
      }
      return mapProduct
    })

    return {
      data: products,
      start,
      limit,
      total: totalCount
    }
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: {
        id: id
      }
    })
    return product
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const productToUpdate = await this.prisma.product.findUnique({
      where: {
        id: id 
      }
    })
    if(!productToUpdate) throw new BadRequestException('Produto não encontrado')
    const productUpdated = await this.prisma.product.update({
      where: {
        id: id
      },
      data: {
        name: updateProductDto.name,
        description: updateProductDto.description,
        price: updateProductDto.price,
        stock: updateProductDto.stock,
        brand: updateProductDto.brand,
        categoryId: updateProductDto.categoryId,
        images: updateProductDto.images,
      }
    })
    return productUpdated
  }

  remove(id: string) {
    return this.prisma.product.delete({
      where: {
        id: id
      }
    })
  }
}
