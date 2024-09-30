import { CartService } from './cart.service';
import { CartDto } from './dto/cart.dto';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    getCart(cartDto: CartDto): string;
    closeCart(cartDto: CartDto): string;
}
