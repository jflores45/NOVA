import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

// GET  /api/editorial
export async function getEditorial( req: Request, res: Response ) {
    try {
      const collections = await prisma.editorialCollection.findMany({
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
  
      res.json(collections);
    } catch (error) {
      console.error(error);
  
      res.status(500).json({
        message: "Server error",
      });
    }
  }