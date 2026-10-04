import { Router } from "express";

import {
  getWishList,
  addItems,
  deleteItem
} from "../controllers/wishList.controller";

const router = Router();

router.get("/wishlist", getWishList);

router.get("/cart/wishlist", addItems);

router.get("/wishlist/:productId", deleteItem);

export default router;