"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../../common/database/PrismaService");
const decimal_js_1 = require("decimal.js");
const couponList = [
    { id: 'NATURAMAIS10', description: 'Promoção de 10 Reais', value: 10, expiresIn: null },
    { id: 'NATALPREMIO2', description: 'Promoção de 10 Reais', value: 20, expiresIn: null }
];
let CartService = class CartService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getCart(cart) {
        const { clientId, address, products, coupon } = cart;
        const productsWithQuantityAndTotal = await this.getProductsWithQuantity(products);
        const totalProducts = this.getTotalProducts(productsWithQuantityAndTotal);
        const couponValue = this.checkCoupon(coupon[0]);
        const shippingValue = address.zip_code ? this.getFakeShippingValue(address.zip_code) : 0;
        const totalCart = shippingValue + totalProducts - couponValue;
        return {
            ...cart,
            products: productsWithQuantityAndTotal,
            summary: {
                totalProducts: totalProducts,
                couponValue,
                shippingValue,
                total: totalCart
            }
        };
    }
    closeCart(cart) {
        return `This action start cart conclusion`;
    }
    getFakeShippingValue(zipCode) {
        return 32.40;
    }
    async getProductsWithQuantity(simpleProductList) {
        const productIdList = simpleProductList.map((product) => product.id);
        const dbProducts = await this.prisma.product.findMany({
            where: {
                id: {
                    in: productIdList
                }
            }
        });
        const products = !dbProducts.length ? [] : dbProducts.map((product) => {
            const simpleProduct = simpleProductList.find((simpleProduct) => simpleProduct.id === product.id);
            const totalProducts = new decimal_js_1.default(product.price).mul(simpleProduct.quantity);
            return {
                ...product,
                quantity: simpleProduct.quantity,
                total: new decimal_js_1.default(totalProducts).toNumber()
            };
        });
        return products;
    }
    checkCoupon(couponId) {
        const validCoupon = couponList.find(coupon => coupon.id === couponId);
        return validCoupon ? validCoupon.value : 0;
    }
    getTotalProducts(products) {
        const totalProducts = products.reduce((totalAmount, p) => {
            totalAmount = new decimal_js_1.default(p.total).plus(totalAmount).toNumber();
            return totalAmount;
        }, 0);
        return totalProducts;
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], CartService);
//# sourceMappingURL=cart.service.js.map