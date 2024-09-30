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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../../common/database/PrismaService");
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProductDto) {
        const productCreated = await this.prisma.product.create({
            data: {
                name: createProductDto.name,
                productIdView: createProductDto.productIdView,
                description: createProductDto.description,
                price: createProductDto.price,
                stock: createProductDto.stock,
                brand: createProductDto.brand,
                category: {
                    connect: {
                        id: createProductDto.categoryId
                    }
                },
                images: createProductDto.images,
            }
        });
        return productCreated;
    }
    async findAll(query) {
        const { limit, start, name } = query;
        const where = {};
        if (name) {
            where.OR = [
                {
                    productIdView: {
                        contains: name,
                        mode: 'insensitive',
                    },
                },
                {
                    name: {
                        contains: name,
                        mode: 'insensitive',
                    },
                },
                {
                    description: {
                        contains: name,
                        mode: 'insensitive',
                    },
                },
                {
                    brand: {
                        contains: name,
                        mode: 'insensitive',
                    },
                },
            ];
        }
        const [rawProducts, totalCount] = await Promise.all([
            this.prisma.product.findMany({
                where,
                skip: +start,
                take: +limit,
                include: {
                    category: true
                }
            }),
            this.prisma.product.count()
        ]);
        const products = rawProducts.map((product) => {
            const mapProduct = {
                id: product.id,
                productIdView: product.productIdView,
                name: product.name,
                description: product.description,
                price: product.price,
                stock: product.stock,
                brand: product.brand,
                category: {
                    id: product.category.id,
                    description: product.category.description
                },
                images: product.images,
            };
            return mapProduct;
        });
        return {
            data: products,
            start,
            limit,
            total: totalCount
        };
    }
    async findOne(id) {
        const product = await this.prisma.product.findUnique({
            where: {
                id: id
            }
        });
        return product;
    }
    async update(id, updateProductDto) {
        const productToUpdate = await this.prisma.product.findUnique({
            where: {
                id: id
            }
        });
        if (!productToUpdate)
            throw new common_1.BadRequestException('Produto não encontrado');
        const productUpdated = await this.prisma.product.update({
            where: {
                id: id
            },
            data: {
                name: updateProductDto.name,
                description: updateProductDto.description,
                price: updateProductDto.price,
                stock: updateProductDto.stock,
                brand: updateProductDto.brand,
                categoryId: updateProductDto.categoryId,
                images: updateProductDto.images,
            }
        });
        return productUpdated;
    }
    remove(id) {
        return this.prisma.product.delete({
            where: {
                id: id
            }
        });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map