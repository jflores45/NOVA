import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { products } from "./seed-data";
import { editorialCollections } from "./seed-data"

async function main() {
  await prisma.editorialImage.deleteMany();
  await prisma.editorialCollection.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();

  for (const collection of editorialCollections) {
    await prisma.editorialCollection.create({
      data: {
        title: collection.title,
        slug: collection.slug,
        description: collection.description,
        season: collection.season,
        category: collection.category,
        coverImage: collection.coverImage,
        featured: collection.featured,
  
        images: {
          create: collection.images.map((image, index) => ({
            imageUrl: image,
            sortOrder: index + 1,
          })),
        },
      },
    });
  }

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

  console.log(`Seeded ${editorialCollections.length} editorials`);
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