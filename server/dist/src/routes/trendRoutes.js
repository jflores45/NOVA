"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trend_controller_1 = require("../controllers/trend.controller");
const router = (0, express_1.Router)();
router.get("/", trend_controller_1.getTrend);
exports.default = router;
