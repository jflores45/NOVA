"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrend = getTrend;
const prisma_1 = require("../lib/prisma");
// GET  /api/editorial
async function getTrend(req, res) {
    try {
        const color = await prisma_1.prisma.colorTrend.findMany({
            include: {
                slides: {
                    orderBy: {
                        sortOrder: "asc",
                    },
                },
            },
        });
        res.json(color);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error",
        });
    }
}
