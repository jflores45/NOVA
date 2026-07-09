import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { products } from "./seed-data";

async function main() {
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: products });
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