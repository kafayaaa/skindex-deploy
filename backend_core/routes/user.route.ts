import { Router } from "express";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.get("/profile", requireAuth, async (req, res) => {
  res.json({
    message: "Authenticated",
    user: req.user,
  });
});

export default router;
