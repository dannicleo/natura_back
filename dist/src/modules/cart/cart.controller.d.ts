import { CartService } from './cart.service';
import { CartDto } from './dto/cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    getCart(cartDto: CartDto): Promise<{
        products: ({
            productIdView: string;
            name: string;
            description: string;
            price: import("decimal.js").default;
            stock: number;
            brand: string;
            categoryId: string;
            images?: any;
        } & {
            quantity: number;
            total: number;
        })[];
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
    closeCart(cartDto: CartDto): string;
}
