import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

// GET    /api/user
export async function getUser ( req: Request, res: Response ) {
    try {
      const user = await prisma.user.findUnique({
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
    } catch (error) {
      res.status(500).json({
        message: "Server error",
      });
  }
}
  