import { Router } from "express";
import { getEditorialFeatures, getEditorialLooks, } from "../controllers/editorial.controller";

const router = Router();

router.get("/features", getEditorialFeatures);
router.get("/looks", getEditorialLooks);

export default router;