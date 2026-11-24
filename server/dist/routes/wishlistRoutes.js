"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const wishList_controller_1 = require("../controllers/wishList.controller");
const router = (0, express_1.Router)();
router.get("/wishlist", wishList_controller_1.getWishList);
router.get("/cart/wishlist", wishList_controller_1.addItems);
router.get("/wishlist/:productId", wishList_controller_1.deleteItem);
exports.default = router;
