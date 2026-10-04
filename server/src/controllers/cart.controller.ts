// GET    /api/cart
// POST   /api/cart/items
// PATCH  /api/cart/items/:id
// DELETE /api/cart/items/:id
import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

export async function getCart (req: Request, res: Response ) {
    try {
        const userId = Number(req.params?.id);

        const cart = await prisma.cart.findUnique({
            where: { 
                id: userId, 
            },
            select: {
                id: true,
                userId: true,
                items: true,
            },
        })
        res.json(cart);
    } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
}
}

export async function addItems (req: Request, res: Response ) {
    try {
        const { productId, quantity } = req.body;

        const userId = Number(req.params?.id);

        // Find user's cart
        const cart = await prisma.cart.findUnique({
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
        const createItem = await prisma.cartItem.create({
            data: { 
                quantity,
                cartId: cart.id,
                productId,
              },
        });
    
        res.status(201).json(createItem);

    } catch (error) {
        res.status(500).json({
          message: "Server error",
        });
    }
}

export async function updateItem( req: Request, res: Response ) {
    // find cart
    //  update quantity and size
    try {
        const itemId = Number(req.params.id);
        const { quantity, size } = req.body;

        // validate data before inputting
        const existingItem = await prisma.cartItem.findUnique({
            where: {
                id: itemId,
            },
        });

        if(!existingItem) {
            return res.status(404).json({
                message: "Cart not found",
            });
        }

        const updateItem = await prisma.cartItem.update({
            where: {
                id: itemId,
            },
            data: {
                quantity,
                size,
              },
        });

        res.json(updateItem);

    } catch (error) {
        res.status(500).json({
          message: "Server error",
        });
    }
}


export async function deletedItem( req: Request, res: Response ) {


}