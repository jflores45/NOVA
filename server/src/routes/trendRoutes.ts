import { Router } from "express";

import { getTrend, } from "../controllers/trend.controller";

const router = Router();

router.get("/", getTrend);

export default router;