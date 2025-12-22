// src/controllers/skin.controller.ts
import { Request, Response } from "express";
import { SkinCheckService } from "../services/skin-check.service.js";
import fs from "fs";

export class SkinCheckController {
  static async analyze(req: Request, res: Response) {
    if (!req.file) {
      return res.status(400).json({
        error: "Image file is required",
      });
    }

    try {
      const buffer = req.file.buffer;
      const mimeType = req.file.mimetype;

      if (!mimeType.startsWith("image/")) {
        return res.status(400).send("File harus berupa gambar.");
      }

      const result = await SkinCheckService.analyzeSkin(buffer, mimeType);

      res.status(200).json({
        message: "Skin type analyzed successfully",
        data: result,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        error: "Failed to analyze skin type",
      });
    }
  }
}
