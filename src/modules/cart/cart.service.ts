import { Injectable } from '@nestjs/common';
import { CartDto } from './dto/cart.dto';
import { PrismaService } from '../../common/database/PrismaService';
import Decimal from 'decimal.js';

type Product = {
  productIdView: string
  name: string
  description: string
  price: Decimal
  stock: number
  brand: string
  categoryId: string
  images?: any
}

type CartProduct = Product & { quantity: number, total: number }
type CartProductList = CartProduct[]

const couponList = [
  { id: 'NATURAMAIS10', description: 'Promoção de 10 Reais', value: 10,expiresIn: null },
  { id: 'NATALPREMIO2', description: 'Promoção de 10 Reais', value: 20,expiresIn: null }
]

@Injectable()
export class CartService {

  constructor(
    private readonly prisma: PrismaService
  ){}

  async getCart(cart: CartDto) {
    const { clientId, address, products, coupon } = cart
    const productsWithQuantityAndTotal = await this.getProductsWithQuantity(products)       //junta dados da lista de produtos do front junto com a lista de produtos do banco
    const totalProducts = this.getTotalProducts(productsWithQuantityAndTotal)         //calcula o valor total dos produtos   
    const couponValue = this.checkCoupon(coupon[0])                                         //aplica
    const shippingValue = address.zip_code? this.getFakeShippingValue(address.zip_code):0   //busca frete de uma funÇão falsa
    const totalCart = shippingValue + totalProducts - couponValue
    return {
        ...cart,
        products: productsWithQuantityAndTotal,
        summary: {
          totalProducts: totalProducts,
          couponValue,
          shippingValue,
          total: totalCart
        }
    }
  }

  closeCart(cart: CartDto) {
    return `This action start cart conclusion`;
  }

  private getFakeShippingValue(zipCode: string){
    return 32.40
  }

  async getProductsWithQuantity(simpleProductList: { id: string, quantity: number }[] ): Promise<CartProductList> {
    const productIdList = simpleProductList.map((product) => product.id)
    const dbProducts = await this.prisma.product.findMany({
      where: {
        id: {
          in: productIdList
        }
      }
    })
    const products: CartProduct[] = !dbProducts.length? []: dbProducts.map((product) => {
      const simpleProduct = simpleProductList.find((simpleProduct) => simpleProduct.id === product.id)
      const totalProducts = new Decimal(product.price).mul(simpleProduct.quantity)
      return {
        ...product,
        quantity: simpleProduct.quantity,
        total: new Decimal(totalProducts).toNumber()
      }
    })
    return products
  }

  checkCoupon(couponId: string): number {
    const validCoupon = couponList.find(coupon => coupon.id === couponId)
    return validCoupon? validCoupon.value:0
  }

  getTotalProducts(products: CartProductList): number{
    const totalProducts: number = products.reduce((totalAmount, p) => { 
      totalAmount = new Decimal(p.total).plus(totalAmount).toNumber()
      return totalAmount
    }, 0)
    return totalProducts
  }

}