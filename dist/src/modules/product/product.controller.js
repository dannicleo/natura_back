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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../../guards/auth.guard");
const role_guard_1 = require("../../guards/role.guard");
const role_decorator_1 = require("../../decorators/role.decorator");
const client_1 = require("@prisma/client");
const query_product_dto_1 = require("./dto/query-product.dto");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    create(createProductDto) {
        return this.productService.create(createProductDto);
    }
    findAll(query) {
        return this.productService.findAll(query);
    }
    findOne(id) {
        return this.productService.findOne(id);
    }
    update(id, updateProductDto) {
        return this.productService.update(id, updateProductDto);
    }
    remove(id) {
        return this.productService.remove(id);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.MyAuthGuard, role_guard_1.RolesGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Cria um produto' }),
    (0, swagger_1.ApiCreatedResponse)({ description: "Produto criado com sucesso" }),
    (0, swagger_1.ApiForbiddenResponse)({ description: "Usuário não registrado." }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Retorna uma lista de produtos' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Sucesso' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: true, type: Number, description: 'Número máximo de produtos a serem retornados' }),
    (0, swagger_1.ApiQuery)({ name: 'start', required: true, type: Number, description: 'Índice inicial dos produtos a serem retornados' }),
    (0, swagger_1.ApiQuery)({ name: 'name', required: false, type: String, description: 'Nome do produto para filtro' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_product_dto_1.QueryProductDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Retorna os dados de um produto' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Sucesso' }),
    (0, swagger_1.ApiQuery)({ name: 'id', required: true, type: Number, description: 'Id do produto a ser retornado' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: "Usuário não registrado." }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findOne", null);
__decorate([
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN, client_1.Role.COLLABORATOR),
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualiza dados de um produto' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Produto atualizado com sucesso' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: "Usuário não registrado." }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "update", null);
__decorate([
    (0, role_decorator_1.Roles)(client_1.Role.ADMIN, client_1.Role.COLLABORATOR),
    (0, swagger_1.ApiOperation)({ summary: 'Exclui um produto' }),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({ description: 'Sucesso' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: "Usuário não registrado." }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "remove", null);
exports.ProductController = ProductController = __decorate([
    (0, swagger_1.ApiTags)('Product'),
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map