import { CartDto } from './dto/cart.dto';
export declare class CartService {
    getCart(cart: CartDto): string;
    closeCart(cart: CartDto): string;
    private getFakeShippingValue;
}
