import { Router } from "express";

import {
  getProducts,
  getProduct,
  getFeatured,
  getCategory,
} from "../controllers/product.controller";

const router = Router();

router.get("/", getProducts);

router.get("/featured", getFeatured);

router.get("/category/:category", getCategory);

router.get("/:id", getProduct);

export default router;