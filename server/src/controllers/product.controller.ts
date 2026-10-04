import { Request, Response } from "express";
import { prisma } from "../lib/prisma";


// GET    /api/products
export async function getProducts (req: Request, res: Response ) {
  try {
    const { collection, category } = req.query;

    const products = await prisma.product.findMany({
      where: {
        ...(collection && {
          collection: collection as string,
        }),
        ...(category && {
          category: category as string,
        }),
      },
      include: {
        images: true,
      },
    });

    res.json(products);
  } catch (error) {
  res.status(500).json({
    message: "Server error",
  });
}
};

// GET    /api/products/:id
export async function getProduct(req: Request, res: Response ) {
  try {
    const productId = Number(req.params?.id);

    const product = await prisma.product.findUnique({
      where: { 
        id: productId, 
      },
      select: {
        id: true,
        price: true,
        description: true,
        collection: true,
        featured: true,
        images: true,
        name: true,
        category: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
}
}

// GET    /api/products/featured
export async function getFeatured(req: Request, res: Response ) {
  try {
    const products = await prisma.product.findMany({
      where: { featured: true },
      select: {
        id: true,
        price: true,
        description: true,
        collection: true,
        featured: true,
        images: true,
        name: true,
        category: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.json(products);
  }  catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
}

// GET    /api/products/category/:category
export async function getCategory(req: Request, res: Response ) {
  try {
    const category = req.params.category as string;

    const products = await prisma.product.findMany({
      where: { 
        category: category 
      },
      select: {
        id: true,
        price: true,
        description: true,
        collection: true,
        featured: true,
        images: true,
        name: true,
        category: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
}
