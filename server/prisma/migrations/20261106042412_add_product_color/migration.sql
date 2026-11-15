/*
  Warnings:

  - You are about to drop the column `collection` on the `products` table. All the data in the column will be lost.
  - You are about to drop the column `featured` on the `products` table. All the data in the column will be lost.
  - Added the required column `color` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subcategories` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "collection",
DROP COLUMN "featured",
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "subcategories" TEXT NOT NULL;
