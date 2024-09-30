import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CartDto } from './dto/cart.dto';

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  @ApiOperation({ summary: 'Retorna os dados de um carrinho calculado' })
  @ApiOkResponse({ description: 'Sucesso'})
  getCart(@Body() cartDto: CartDto) {
    return this.cartService.getCart(cartDto);
  }

  @Post('close')
  @ApiOperation({ summary: 'Inicia o fechamento de um carrinho' })
  @ApiOkResponse({ description: 'Sucesso'})
  closeCart(@Body() cartDto: CartDto) {
    return this.cartService.closeCart(cartDto)
  }

}
