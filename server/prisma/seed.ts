
import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { products, editorialFeatures, editorialLooks, colorTrends,} from "./seed-data";

async function main() {
  // Delete child records
  await prisma.trendSlide.deleteMany();
  await prisma.editorialLookProduct.deleteMany();
  await prisma.editorialFeatureImage.deleteMany();
  await prisma.cartItem.deleteMany();
  await prisma.wishlistItem.deleteMany();
  await prisma.productImage.deleteMany();

  // Delete parent records
  await prisma.colorTrend.deleteMany();
  await prisma.editorialLook.deleteMany();
  await prisma.editorialFeature.deleteMany();
  await prisma.product.deleteMany();

  // Seed products and their images
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

  // Seed editorial features and carousel images
  for (const feature of editorialFeatures) {
    await prisma.editorialFeature.create({
      data: {
        title: feature.title,
        slug: feature.slug,
        description: feature.description,
        season: feature.season,
        category: feature.category,
        coverImage: feature.coverImage,
        featured: feature.featured,
        images: {
          create: feature.images.map((image, index) => ({
            imageUrl: image,
            sortOrder: index + 1,
          })),
        },
      },
    });
  }

  // Seed editorial looks and connect their products
  
for (const look of editorialLooks) {
  await prisma.editorialLook.create({
    data: {
      title: look.title,
      slug: look.slug,
      category: look.category,
      coverImage: look.coverImage,
      featured: look.featured,
      products: {
        create: await Promise.all(
          look.products.map(async (item, index) => {
            const product = await prisma.product.findFirst({
              where: { name: item.productName },
              select: { id: true },
            });

            if (!product) {
              throw new Error(
                `Product not found: ${item.productName}`
              );
            }

            return {
              productId: product.id,
              sortOrder: index + 1,
            };
          })
        ),
      },
    },
  });
}


  // Seed color trends and their slides
  for (const trend of colorTrends) {
    await prisma.colorTrend.create({
      data: {
        title: trend.title,
        season: trend.season,
        slug: trend.slug,
        description: trend.description,
        colorHex: trend.colorHex,
        featured: trend.featured,
        slides: {
          create: trend.slides.map((slide, index) => ({
            imageUrl: slide.imageUrl,
            designer: slide.designer,
            season: slide.season,
            sortOrder: index + 1,
          })),
        },
      },
    });
  }

  console.log(`Seeded ${products.length} products`);
  console.log(`Seeded ${editorialFeatures.length} editorial features`);
  console.log(`Seeded ${editorialLooks.length} editorial looks`);
  console.log(`Seeded ${colorTrends.length} color trends`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
