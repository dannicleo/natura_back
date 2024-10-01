import { CartDto } from './dto/cart.dto';
import { PrismaService } from 'src/common/database/PrismaService';
import Decimal from 'decimal.js';
type Product = {
    productIdView: string;
    name: string;
    description: string;
    price: Decimal;
    stock: number;
    brand: string;
    categoryId: string;
    images?: any;
};
type CartProduct = Product & {
    quantity: number;
    total: number;
};
type CartProductList = CartProduct[];
export declare class CartService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getCart(cart: CartDto): Promise<{
        products: CartProductList;
        summary: {
            totalProducts: number;
            couponValue: number;
            shippingValue: number;
            total: number;
        };
        address: {
            zip_code: string;
        };
        clientId: string;
        coupon: string[];
    }>;
    closeCart(cart: CartDto): string;
    private getFakeShippingValue;
    getProductsWithQuantity(simpleProductList: {
        id: string;
        quantity: number;
    }[]): Promise<CartProductList>;
    checkCoupon(couponId: string): number;
    getTotalProducts(products: CartProductList): number;
}
export {};
