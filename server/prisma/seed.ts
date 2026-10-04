import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { products } from "./seed-data";

async function main() {
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();

  for (const product of products) {
    await prisma.product.create({
      data: {
        name: product.name,
        price: product.price,
        category: product.category,
        description: product.description,
        collection: product.collection,
        featured: product.featured,

        images: {
          create: product.images.map((image, index) => ({
            url: image,
            sortOrder: index + 1,
          })),
        },
      },
    });
  }

  console.log(`Seeded ${products.length} products`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });