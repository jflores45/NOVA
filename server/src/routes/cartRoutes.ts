import { Router } from "express";

import {
  getCart,
  addItems,
  updateItem,
  deletedItem
} from "../controllers/cart.controller";

const router = Router();

router.get("/cart", getCart);

router.get("/cart/items", addItems);

router.get("/cart/items/:id", updateItem);

router.get("/cart/items/:id", deletedItem);

export default router;