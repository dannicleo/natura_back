import { Injectable } from '@nestjs/common';
import { CartDto } from './dto/cart.dto';
import { PrismaService } from 'src/common/database/PrismaService';

@Injectable()
export class CartService {

  constructor(
    private readonly prisma: PrismaService
  ){

  }

  async getCart(cart: CartDto) {

    const { clientId, address, products, coupon } = cart
    const productIds = cart.products.map((product) => product.id)
    const fullProducts = await this.prisma.product.findMany({
      where: {
        id: {
          in: productIds
        }
      }
    })

    return {
      
    }



    //calcula totais
    //total do produtos
    //- cupons desconto
    //+ frete

    return {

    };
  }

  closeCart(cart: CartDto) {
    return `This action start cart conclusion`;
  }

  private getFakeShippingValue(){
    return 32.40
  }

}




const dto = {
  address: {
   zip_code: ""
  },
  clientId: "",
  coupon: [],
  products: [
    { id: "uy887799kjlkl", quantity: 1 }
  ]
}