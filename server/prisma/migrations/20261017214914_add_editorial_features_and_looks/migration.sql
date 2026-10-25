/*
  Warnings:

  - You are about to drop the `editorial_collection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `editorial_image` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `color_trend` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `color_trend` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "editorial_image" DROP CONSTRAINT "editorial_image_collectionId_fkey";

-- AlterTable
ALTER TABLE "color_trend" ADD COLUMN     "slug" TEXT NOT NULL;

-- DropTable
DROP TABLE "editorial_collection";

-- DropTable
DROP TABLE "editorial_image";

-- CreateTable
CREATE TABLE "editorial_feature" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "season" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "cover_image" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "editorial_feature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "editorial_feature_image" (
    "id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "caption" TEXT,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "feature_id" TEXT NOT NULL,

    CONSTRAINT "editorial_feature_image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "editorial_look" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "cover_image" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "editorial_look_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "editorial_look_product" (
    "editorial_look_id" TEXT NOT NULL,
    "product_id" INTEGER NOT NULL,
    "sort_order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "editorial_look_product_pkey" PRIMARY KEY ("editorial_look_id","product_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "editorial_feature_slug_key" ON "editorial_feature"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "editorial_look_slug_key" ON "editorial_look"("slug");

-- CreateIndex
CREATE INDEX "editorial_look_product_product_id_idx" ON "editorial_look_product"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "color_trend_slug_key" ON "color_trend"("slug");

-- AddForeignKey
ALTER TABLE "editorial_feature_image" ADD CONSTRAINT "editorial_feature_image_feature_id_fkey" FOREIGN KEY ("feature_id") REFERENCES "editorial_feature"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "editorial_look_product" ADD CONSTRAINT "editorial_look_product_editorial_look_id_fkey" FOREIGN KEY ("editorial_look_id") REFERENCES "editorial_look"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "editorial_look_product" ADD CONSTRAINT "editorial_look_product_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
