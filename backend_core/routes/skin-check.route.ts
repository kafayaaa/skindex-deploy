import { Router } from "express";
import upload from "../utils/multer.js";
import { SkinCheckController } from "../controllers/skin-check.controller.js";

const router = Router();

router.post("/upload", upload.single("photo"), SkinCheckController.analyze);

export default router;
