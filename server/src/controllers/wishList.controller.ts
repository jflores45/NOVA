import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

// GET    /api/wishlist
export async function getWishList( req: Request, res: Response ) {
    const userId = req.user.userId;

    const wishlist = await prisma.wishlistItem.findMany({
        where: {
            userId,
        },
        include: {
            product: true,

        }
    })
    res.json(wishlist);
}

// POST   /api/wishlist
export async function addItems(req: Request, res: Response) {
    const userId = req.user.userId;
    const { productId } = req.body;
  
    const newItem = await prisma.wishlistItem.create({
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
export async function deleteItem(req: Request, res: Response) {
    const userId = req.user.userId;
    const productId = Number(req.params.productId);
  
    const deletedItem = await prisma.wishlistItem.deleteMany({
      where: {
        userId,
        productId,
      },
    });
  
    res.json(deletedItem);
  }