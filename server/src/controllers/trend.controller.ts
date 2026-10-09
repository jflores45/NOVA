import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

// GET  /api/editorial
export async function getTrend( req: Request, res: Response ) {
    try {
      const color = await prisma.colorTrend.findMany({
        include: {
          slides: {
            orderBy: {
              sortOrder: "asc",
            },
          },
        },
      });
  
      res.json(color);
    } catch (error) {
      console.error(error);
  
      res.status(500).json({
        message: "Server error",
      });
    }
  }