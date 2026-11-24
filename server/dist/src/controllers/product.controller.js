"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = getProducts;
exports.getProduct = getProduct;
exports.getCategory = getCategory;
const prisma_1 = require("../lib/prisma");
// GET /api/products
async function getProducts(req, res) {
    try {
        const { collection, category, group, colors, sizes, minPrice, maxPrice } = req.query;
        const colorList = typeof colors === "string" && colors ? colors.split(",") : [];
        const sizeList = typeof sizes === "string" && sizes ? sizes.split(",") : [];
        const products = await prisma_1.prisma.product.findMany({
            where: {
                ...(collection && { collection: collection }),
                ...(category && { category: category }),
                ...(group && { group: group }),
                variants: {
                    some: {
                        ...(colorList.length && { color: { in: colorList } }),
                        ...(sizeList.length && { size: { in: sizeList } }),
                        stock: { gt: 0 },
                    },
                },
                price: {
                    ...(minPrice && { gte: Number(minPrice) }),
                    ...(maxPrice && { lte: Number(maxPrice) }),
                },
            },
            include: {
                images: true,
            },
        });
        res.json(products);
    }
    catch (error) {
        res.status(500).json({
            message: "Server error",
        });
    }
}
;
// GET /api/products/:id
async function getProduct(req, res) {
    try {
        const productId = Number(req.params?.id);
        const product = await prisma_1.prisma.product.findUnique({
            where: {
                id: productId,
            },
            select: {
                id: true,
                price: true,
                description: true,
                collection: true,
                featured: true,
                images: true,
                name: true,
                category: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        res.json(product);
    }
    catch (error) {
        res.status(500).json({
            message: "Server error",
        });
    }
}
// GET /api/products/category/:category
async function getCategory(req, res) {
    try {
        const category = req.params.category;
        const products = await prisma_1.prisma.product.findMany({
            where: {
                category: category
            },
            select: {
                id: true,
                price: true,
                description: true,
                collection: true,
                featured: true,
                images: true,
                name: true,
                category: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        res.json(products);
    }
    catch (error) {
        res.status(500).json({
            message: "Server error",
        });
    }
}
