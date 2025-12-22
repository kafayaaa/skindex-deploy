import { Router } from "express";
import { getSkinInsight } from "../controllers/skinInsight.controller.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.get("/", requireAuth, getSkinInsight);

export default router;
