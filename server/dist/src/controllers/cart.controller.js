"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCart = getCart;
exports.addItems = addItems;
exports.updateItem = updateItem;
exports.deletedItem = deletedItem;
const prisma_1 = require("../lib/prisma");
async function getCart(req, res) {
    try {
        const userId = Number(req.params?.id);
        const cart = await prisma_1.prisma.cart.findUnique({
            where: {
                id: userId,
            },
            select: {
                id: true,
                userId: true,
                items: true,
            },
        });
        res.json(cart);
    }
    catch (error) {
        res.status(500).json({
            message: "Server error",
        });
    }
}
async function addItems(req, res) {
    try {
        const { productId, quantity } = req.body;
        const userId = Number(req.params?.id);
        // Find user's cart
        const cart = await prisma_1.prisma.cart.findUnique({
            where: {
                id: userId,
            },
        });
        if (!cart) {
            return res.status(404).json({
                message: "Cart not found",
            });
        }
        // validate data before inputting
        // Create CartItem
        const createItem = await prisma_1.prisma.cartItem.create({
            data: {
                quantity,
                cartId: cart.id,
                productId,
            },
        });
        res.status(201).json(createItem);
    }
    catch (error) {
        res.status(500).json({
            message: "Server error",
        });
    }
}
async function updateItem(req, res) {
    // find cart
    //  update quantity and size
    try {
        const itemId = Number(req.params.id);
        const { quantity, size } = req.body;
        // validate data before inputting
        const existingItem = await prisma_1.prisma.cartItem.findUnique({
            where: {
                id: itemId,
            },
        });
        if (!existingItem) {
            return res.status(404).json({
                message: "Cart not found",
            });
        }
        const updateItem = await prisma_1.prisma.cartItem.update({
            where: {
                id: itemId,
            },
            data: {
                quantity,
                size,
            },
        });
        res.json(updateItem);
    }
    catch (error) {
        res.status(500).json({
            message: "Server error",
        });
    }
}
async function deletedItem(req, res) {
}
