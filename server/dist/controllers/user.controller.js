"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = getUser;
const prisma_1 = require("../lib/prisma");
// GET    /api/user
async function getUser(req, res) {
    try {
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: Number(req.params.id) },
            select: {
                id: true,
                email: true,
                hashedPassword: true,
                name: true,
                cart: true,
                wishlist: true,
                createdAt: true,
            },
        });
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        const hasPassword = user.hashedPassword ? true : false;
        // delete user.hashedPassword;
        const safeUser = { ...user, hasPassword };
        res.json(safeUser);
    }
    catch (error) {
        res.status(500).json({
            message: "Server error",
        });
    }
}
