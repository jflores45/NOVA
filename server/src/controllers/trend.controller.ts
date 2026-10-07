import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

// GET  /api/editorial
export async function getTrend( req: Request, res: Response ) {
    try {
      const collections = await prisma.colorTrend.findMany({
        include: {
          images: true,
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