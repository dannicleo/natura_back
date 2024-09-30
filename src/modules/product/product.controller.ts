import { Controller, Get, Post, Body, Query, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MyAuthGuard } from 'src/guards/auth.guard';
import { RolesGuard } from 'src/guards/role.guard';
import { Roles } from 'src/decorators/role.decorator';
import { Role } from '@prisma/client';
import { QueryProductDto } from './dto/query-product.dto';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Roles(Role.ADMIN)
  @UseGuards(MyAuthGuard, RolesGuard)
  @Post()
  @ApiOperation({ summary: 'Cria um produto' })
  @ApiCreatedResponse({ description: "Produto criado com sucesso" })
  @ApiForbiddenResponse({ description: "Usuário não registrado." })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna uma lista de produtos' })
  @ApiOkResponse({ description: 'Sucesso'})
  @ApiQuery({ name: 'limit', required: true, type: Number, description: 'Número máximo de produtos a serem retornados' })
  @ApiQuery({ name: 'start', required: true, type: Number, description: 'Índice inicial dos produtos a serem retornados' })
  @ApiQuery({ name: 'name', required: false, type: String, description: 'Nome do produto para filtro' })
  findAll(@Query() query: QueryProductDto) {
    return this.productService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna os dados de um produto' })
  @ApiOkResponse({ description: 'Sucesso'})
  @ApiQuery({ name: 'id', required: true, type: Number, description: 'Id do produto a ser retornado' })
  @ApiForbiddenResponse({ description: "Usuário não registrado." })
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Roles(Role.ADMIN, Role.COLLABORATOR)
  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza dados de um produto' })
  @ApiOkResponse({ description: 'Produto atualizado com sucesso' })
  @ApiForbiddenResponse({ description: "Usuário não registrado." })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Roles(Role.ADMIN, Role.COLLABORATOR)
  @ApiOperation({ summary: 'Exclui um produto' })
  @Delete(':id')
  @ApiOkResponse({ description: 'Sucesso' })
  @ApiForbiddenResponse({ description: "Usuário não registrado." })
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }

}
