"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const editorial_controller_1 = require("../controllers/editorial.controller");
const router = (0, express_1.Router)();
router.get("/features", editorial_controller_1.getEditorialFeatures);
router.get("/looks", editorial_controller_1.getEditorialLooks);
exports.default = router;
