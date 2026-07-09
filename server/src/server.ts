import "dotenv/config";
import express from "express";
import cors from "cors";
import { prisma } from "./lib/prisma";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/products", async (req, res) => {
  const { collection, category } = req.query;

  const products = await prisma.product.findMany({
    where: {
      ...(collection && { collection: String(collection) }),
      ...(category && { category: String(category) }),
    },
  });

  res.json(products);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});