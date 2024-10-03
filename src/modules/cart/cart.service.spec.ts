import { Test, TestingModule } from "@nestjs/testing";
import { CartService } from "./cart.service";
import { PrismaService } from "../../common/database/PrismaService";
import { randomUUID } from "crypto";
import Decimal from "decimal.js";

const mockProducts = [
  {
    id: randomUUID(),
    name: "Ekos Ryo Chuva 75 ml",
    description: "Ekos Ryo Chuva verde",
    price: new Decimal(175.90),
    stock: 13,
    brand: "Natura Ekos",
    categoryId: "Perfumaria",
    images: [],
  },
  {
    id: randomUUID(),
    name: "Kaiak Sonar",
    description: "Desodorante colÃ´nia masculino",
    price: new Decimal(172.90),
    stock: 10,
    brand: "Kaiak",
    categoryId: "Perfumaria",
    images: [],
  },
];

const mockCartDto = {
  clientId: randomUUID(),
  address: { zip_code: "12345-678", street: "Street 1", number: 123 },
  products: [
    { id: mockProducts[0].id, quantity: 2 },
    { id: mockProducts[1].id, quantity: 1 },
  ],
  coupon: ["NATURAMAIS10"],
};

describe("CartService", () => {
  let service: CartService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartService,
        {
          provide: PrismaService,
          useValue: {
            product: {
              findMany: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<CartService>(CartService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should get cart and calculate totals correctly", async () => {
    (prismaService.product.findMany as jest.Mock).mockResolvedValue(
      mockProducts
    );
    const result = await service.getCart(mockCartDto);

    expect(prismaService.product.findMany).toHaveBeenCalledWith({
      where: { id: { in: [mockProducts[0].id, mockProducts[1].id] } },
    });

    expect(result.products).toEqual([
      {
        ...mockProducts[0],
        quantity: 2,
        total: 351.80,
      },
      {
        ...mockProducts[1],
        quantity: 1,
        total: 172.90,
      },
    ]);

    expect(result.summary).toEqual({
      totalProducts: 524.70,
      couponValue: 10,
      shippingValue: 32.4,
      total: 547.10,
    });
  });
});
