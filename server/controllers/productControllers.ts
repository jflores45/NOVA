import { Request, Response } from "express";
import { prisma } from "../src/lib/prisma";

export const getProducts = async (
  req: Request,
  res: Response
) => {
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
  });

  res.json(products);
};