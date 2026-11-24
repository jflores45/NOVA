"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWishList = getWishList;
exports.addItems = addItems;
exports.deleteItem = deleteItem;
const prisma_1 = require("../lib/prisma");
// GET  /api/wishlist
async function getWishList(req, res) {
    const userId = req.user.userId;
    const wishlist = await prisma_1.prisma.wishlistItem.findMany({
        where: {
            userId,
        },
        include: {
            product: true,
        }
    });
    res.json(wishlist);
}
// POST /api/wishlist
async function addItems(req, res) {
    const userId = req.user.userId;
    const { productId } = req.body;
    const newItem = await prisma_1.prisma.wishlistItem.create({
        data: {
            userId,
            productId,
        },
        include: {
            product: true,
        },
    });
    res.status(201).json(newItem);
}
// DELETE /api/wishlist/:productId
async function deleteItem(req, res) {
    const userId = req.user.userId;
    const productId = Number(req.params.productId);
    const deletedItem = await prisma_1.prisma.wishlistItem.deleteMany({
        where: {
            userId,
            productId,
        },
    });
    res.json(deletedItem);
}
