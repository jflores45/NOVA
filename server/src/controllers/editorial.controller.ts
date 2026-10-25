import { Request, Response } from "express";
import { prisma } from "../lib/prisma";

// GET /api/editorial/features
export async function getEditorialFeatures( req: Request, res: Response ) {
    try {
      const features = await prisma.editorialFeature.findMany({
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
    } catch (error) {
      console.error(error);
  
      res.status(500).json({
        message: "Server error",
      });
    }
  }

// GET /api/editorial/looks
export async function getEditorialLooks( req: Request, res: Response ) {
  try {
    const looks = await prisma.editorialLook.findMany({
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
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
    });
  }
}