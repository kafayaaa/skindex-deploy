import { Router } from "express";
import {
  healthCheck,
  protectedRoute,
} from "../controllers/health.controller.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.get("/", healthCheck);
router.get("/protected", requireAuth, protectedRoute);

export default router;
