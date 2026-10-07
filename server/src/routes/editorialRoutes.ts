import { Router } from "express";

import { getEditorial, } from "../controllers/editorial.controller";

const router = Router();

router.get("/", getEditorial);

export default router;