import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import multer from "multer";
import healthRoute from "../backend_core/routes/health.route.js";
import skinCheckRoute from "../backend_core/routes/skin-check.route.js";
import skinRouter from "../backend_core/routes/skin.route.js";
import skinInsightRoutes from "../backend_core/routes/skinInsight.route.js";
import skinLogRoutes from "../backend_core/routes/skin-log.route.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // frontend Next.js
    credentials: true,
  })
);
app.use(express.json());

// File upload (multer)
const upload = multer({ dest: "uploads/" });

// Routes
app.use("/health", healthRoute);
app.use("/api/skin-check", skinCheckRoute);
app.use("/api/skin", skinRouter);
app.use("/api/skin-insight", skinInsightRoutes);
app.use("/api/skin-log", skinLogRoutes);

// Example endpoint using multer
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  return res.json({
    message: "Upload success",
    file: req.file,
  });
});

// const PORT = process.env.PORT || 4000;

// app.listen(PORT, () => {
//   console.log(`Backend running on http://localhost:${PORT}`);
// });

export default app;
