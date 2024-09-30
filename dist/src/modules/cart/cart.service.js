"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
let CartService = class CartService {
    getCart(cart) {
        const fakeShippingValue = this.getFakeShippingValue();
        return `This action returns all cart`;
    }
    closeCart(cart) {
        return `This action start cart conclusion`;
    }
    getFakeShippingValue() {
        return 32.40;
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)()
], CartService);
const dto = {
    address: {
        zip_code: ""
    },
    clientId: "",
    coupon: [],
    products: [
        { id: "uy887799kjlkl", quantity: 1 }
    ]
};
//# sourceMappingURL=cart.service.js.map