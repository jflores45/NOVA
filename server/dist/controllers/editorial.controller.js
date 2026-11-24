"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEditorialFeatures = getEditorialFeatures;
exports.getEditorialLooks = getEditorialLooks;
const prisma_1 = require("../lib/prisma");
// GET /api/editorial/features
async function getEditorialFeatures(req, res) {
    try {
        const features = await prisma_1.prisma.editorialFeature.findMany({
            orderBy: {
                createdAt: "desc",
            },
            include: {
                images: {
                    orderBy: {
                        sortOrder: "asc",
                    },
                },
            },
        });
        res.json(features);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error",
        });
    }
}
// GET /api/editorial/looks
async function getEditorialLooks(req, res) {
    try {
        const looks = await prisma_1.prisma.editorialLook.findMany({
            orderBy: {
                createdAt: "asc",
            },
            include: {
                products: {
                    orderBy: {
                        sortOrder: "asc",
                    },
                    include: {
                        product: {
                            include: {
                                images: {
                                    orderBy: {
                                        sortOrder: "asc",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });
        res.json(looks);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error",
        });
    }
}
