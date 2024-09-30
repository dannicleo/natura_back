"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const products_1 = require("./products");
async function main() {
    const categories = [
        { id: 'd5f1b2a1-6f70-4b1d-8c1e-2e3a4b5c6d7e', description: 'Eletrônicos' },
        { id: 'a6b2c3d4-e5f6-7a8b-9c0d-e1f2a3b4c5d6', description: 'Livros' },
        { id: 'f1e2d3c4-b5a6-7980-1a2b-3c4d5e6f7a8b', description: 'Perfumaria' },
        { id: '1a2b3c4d-5e6f-7a8b-9c0d-e1f2a3b4c5d6', description: 'Casa e Cozinha' },
        { id: '9f8e7d6c-5b4a-3210-1a2b-3c4d5e6f7a8b', description: 'Esportes' },
    ];
    for (const category of categories) {
        await prisma.category.upsert({
            where: { id: category.id },
            update: {},
            create: category,
        });
    }
    for (const product of products_1.products) {
        await prisma.product.upsert({
            where: { productIdView: product.productIdView },
            update: {},
            create: product,
        });
    }
}
main()
    .catch(e => console.log(e))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map