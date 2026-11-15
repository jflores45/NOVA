/*
  Warnings:

  - You are about to drop the column `product_id` on the `cart_item` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `subcategories` on the `products` table. All the data in the column will be lost.
  - Added the required column `variant_id` to the `cart_item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `group` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cart_item" DROP CONSTRAINT "cart_item_product_id_fkey";

-- AlterTable
ALTER TABLE "cart_item" DROP COLUMN "product_id",
ADD COLUMN     "variant_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "color",
DROP COLUMN "subcategories",
ADD COLUMN     "collection" TEXT,
ADD COLUMN     "group" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "product_variants" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "size" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "sku" TEXT,

    CONSTRAINT "product_variants_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_variants_sku_key" ON "product_variants"("sku");

-- CreateIndex
CREATE UNIQUE INDEX "product_variants_product_id_size_color_key" ON "product_variants"("product_id", "size", "color");

-- AddForeignKey
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "product_variants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "product_variants" ADD CONSTRAINT "product_variants_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;
