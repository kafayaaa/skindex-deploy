import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";
import { createSkinLog } from "../controllers/skin-log.controller.js";

const router = Router();

router.post("/", requireAuth, createSkinLog);

export default router;
