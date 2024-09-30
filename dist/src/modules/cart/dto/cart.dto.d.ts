declare class CartProductDto {
    id: string;
    quantity: number;
}
declare class AddressDto {
    zip_code: string;
}
export declare class CartDto {
    address: AddressDto;
    clientId: string;
    coupon: string[];
    products: CartProductDto[];
}
export {};
