import { Router } from "express";
import {
  analyzeSkin,
  getSkinLogByDate,
} from "../controllers/skin.controller.js";
import upload from "../utils/multer.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.post("/analyze", requireAuth, upload.single("photo"), analyzeSkin);
router.get("/logs/by-date", requireAuth, getSkinLogByDate);

export default router;
