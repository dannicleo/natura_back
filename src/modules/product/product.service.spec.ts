import { Test, TestingModule } from "@nestjs/testing";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { randomUUID } from "crypto";
import { PrismaService } from "../../common/database/PrismaService";
import { QueryProductDto } from "./dto/query-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { BadRequestException } from "@nestjs/common";

const productDtoToProduct = (productDto: CreateProductDto) => {
  return {
    productIdView: productDto.productIdView,
    description: productDto.description,
    name: productDto.name,
    stock: productDto.stock,
    price: productDto.price,
    category: {
      connect: {
        id: productDto.categoryId,
      },
    },
    brand: productDto.brand,
    images: [],
  };
};

const mockProducts = [
  {
    id: randomUUID(),
    productIdView: "productview4",
    name: "Perfume",
    description: "Perfume para mulher 300ml",
    price: 150.78,
    stock: 15,
    brand: "Natura Mulher",
    category: { id: randomUUID(), description: "Perfumaria" },
    images: [],
  },
  {
    id: randomUUID(),
    productIdView: "productview2",
    name: "Blush",
    description: "Blush description",
    price: 292.9,
    stock: 5,
    brand: "Brand A",
    category: { id: randomUUID(), description: "Maquiagem" },
    images: [],
  },
  {
    id: randomUUID(),
    productIdView: "productview1",
    name: "Perfume",
    description: "Perfume para homem 100ml",
    price: 269.9,
    stock: 8,
    brand: "Natura Homem",
    category: { id: randomUUID(), description: "Perfumaria" },
    images: [],
  },
  {
    id: randomUUID(),
    productIdView: "productview3",
    name: "Perfume",
    description: "Perfume para homem 200ml",
    price: 315,
    stock: 10,
    brand: "Kaiak",
    category: { id: randomUUID(), description: "Perfumaria" },
    images: [],
  },
];

const mockCreateProductDto: CreateProductDto = {
  productIdView: "productidview1",
  name: "Product 1",
  description: "Description 1",
  price: 22.34,
  stock: 10,
  brand: "Brand 1",
  categoryId: randomUUID(),
  images: [],
};

const mockUpdateProduct = {
  beforeUpdate: { ...mockProducts[0] },
  updateProductDto: {
    id: mockProducts[0].id,
    productIdView: "productview5",
    name: "Perfume",
    description: "Perfume para mulher 150ml",
    price: 75.23,
    stock: 14,
    brand: "Natura mulher",
    categoryId: randomUUID(),
    images: [],
  },
};

describe("ProductService", () => {
  let service: ProductService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: PrismaService,
          useValue: {
            product: {
              create: jest.fn(),
              findUnique: jest.fn(),
              findMany: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
              count: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should create a product", async () => {
    const product = { ...mockCreateProductDto };
    (prismaService.product.create as jest.Mock).mockResolvedValue(
      mockCreateProductDto
    );

    const result = await service.create(mockCreateProductDto);

    expect(result).toEqual(product);
    expect(prismaService.product.create).toHaveBeenCalledWith({
      data: productDtoToProduct(mockCreateProductDto),
    });
  });

  it("should return products filtered by query", async () => {
    const limit = 2;
    const start = 0;
    const description = "Perfume para ho";
    const filteredProducts = [{ ...mockProducts[2] }, { ...mockProducts[3] }];
    const query: QueryProductDto = { limit, start, name: description };

    (prismaService.product.findMany as jest.Mock).mockResolvedValue(
      filteredProducts
    );

    const result = await service.findAll(query);

    expect(result.data).toHaveLength(2);
    expect(result.data).toEqual(filteredProducts);
    expect(prismaService.product.findMany).toHaveBeenCalledWith({
      where: {
        OR: [
          { productIdView: { contains: description, mode: "insensitive" } },
          { name: { contains: description, mode: "insensitive" } },
          { description: { contains: description, mode: "insensitive" } },
          { brand: { contains: description, mode: "insensitive" } },
        ],
      },
      skip: start,
      take: limit,
      include: {
        category: true,
      },
    });
  });

  it("should return product by its id", async () => {
    const id = randomUUID();
    const product = { ...mockProducts[0] };
    product.id = id;

    (prismaService.product.findUnique as jest.Mock).mockResolvedValue(product);

    const result = await service.findOne(id);

    expect(result.id).toEqual(id);
    expect(result).toEqual(product);
  });

  it("should update a product", async () => {
    const productToUpdate = { ...mockUpdateProduct.beforeUpdate };
    const id = productToUpdate.id;
    const updatedProduct: UpdateProductDto = {
      id,
      ...mockUpdateProduct.updateProductDto,
    };

    (prismaService.product.findUnique as jest.Mock).mockResolvedValue(
      productToUpdate
    );
    (prismaService.product.update as jest.Mock).mockResolvedValue(
      updatedProduct
    );

    const result = await service.update(id, updatedProduct);

    expect(result.id).toEqual(productToUpdate.id);
    expect(result).toEqual(updatedProduct);
    expect(prismaService.product.findUnique).toHaveBeenLastCalledWith({
      where: {
        id: id,
      },
    });
    expect(prismaService.product.update).toHaveBeenCalledWith({
      where: {
        id: id,
      },
      data: {
        name: updatedProduct.name,
        description: updatedProduct.description,
        price: updatedProduct.price,
        stock: updatedProduct.stock,
        brand: updatedProduct.brand,
        categoryId: updatedProduct.categoryId,
        images: updatedProduct.images,
      },
    });
  });

  it("should throw BadRequestException when trying to update a inexistent product", async () => {
    const productToUpdate = { ...mockUpdateProduct.beforeUpdate };
    const id = productToUpdate.id;
    const updatedProduct: UpdateProductDto = {
      id,
      ...mockUpdateProduct.updateProductDto,
    };

    (prismaService.product.update as jest.Mock).mockResolvedValue(null)

    await expect(service.update(id, updatedProduct)).rejects.toThrow(new BadRequestException("Produto nÃ£o encontrado"))

    expect(prismaService.product.findUnique).toHaveBeenLastCalledWith({
      where: {
        id: id,
      },
    });
  });

  it("should delete a product by its id", async () => {
    const id = randomUUID();
    const mockProductToDelete = { ...mockProducts[0] };
    mockProductToDelete.id = id;

    (prismaService.product.delete as jest.Mock).mockResolvedValue(
      mockProductToDelete
    );

    const result = await service.remove(id);

    expect(prismaService.product.delete).toHaveBeenCalledWith({
      where: { id },
    });
    expect(result).toEqual(mockProductToDelete);
  });
});