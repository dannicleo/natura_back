import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { QueryProductDto } from './dto/query-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(createProductDto: CreateProductDto): Promise<{
        id: string;
        productIdView: string;
        name: string;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        stock: number;
        images: import("@prisma/client/runtime/library").JsonValue | null;
        brand: string;
        categoryId: string;
    }>;
    findAll(query: QueryProductDto): Promise<{
        data: {
            id: string;
            productIdView: string;
            name: string;
            description: string;
            price: import("@prisma/client/runtime/library").Decimal;
            stock: number;
            brand: string;
            category: {
                id: string;
                description: string;
            };
            images: import("@prisma/client/runtime/library").JsonValue;
        }[];
        start: number;
        limit: number;
        total: number;
    }>;
    findOne(id: string): Promise<{
        id: string;
        productIdView: string;
        name: string;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        stock: number;
        images: import("@prisma/client/runtime/library").JsonValue | null;
        brand: string;
        categoryId: string;
    }>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        id: string;
        productIdView: string;
        name: string;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        stock: number;
        images: import("@prisma/client/runtime/library").JsonValue | null;
        brand: string;
        categoryId: string;
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: string;
        productIdView: string;
        name: string;
        description: string;
        price: import("@prisma/client/runtime/library").Decimal;
        stock: number;
        images: import("@prisma/client/runtime/library").JsonValue | null;
        brand: string;
        categoryId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
