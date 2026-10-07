-- CreateEnum
CREATE TYPE "Category" AS ENUM ('WOMEN', 'MEN');

-- CreateTable
CREATE TABLE "editorial_collection" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "season" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "coverImage" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "editorial_collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "editorial_image" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "caption" TEXT,
    "sortOrder" INTEGER NOT NULL,
    "collectionId" TEXT NOT NULL,

    CONSTRAINT "editorial_image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "color_trend" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "season" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "colorHex" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "color_trend_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trend_slide" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "designer" TEXT NOT NULL,
    "season" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL,
    "trendId" TEXT NOT NULL,

    CONSTRAINT "trend_slide_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "editorial_collection_slug_key" ON "editorial_collection"("slug");

-- AddForeignKey
ALTER TABLE "editorial_image" ADD CONSTRAINT "editorial_image_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "editorial_collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trend_slide" ADD CONSTRAINT "trend_slide_trendId_fkey" FOREIGN KEY ("trendId") REFERENCES "color_trend"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
