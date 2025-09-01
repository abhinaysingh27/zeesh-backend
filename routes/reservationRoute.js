import express from "express";
import send_reservation from "../controller/reservation.js";

const router = express.Router();

// Handle preflight OPTIONS request
router.options("/send", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "https://zeesh-frontend.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).end();
});

// POST route with CORS headers
router.post("/send", async (req, res, next) => {
  try {
    // Set CORS headers explicitly
    res.setHeader("Access-Control-Allow-Origin", "https://zeesh-frontend.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Call your controller logic
    await send_reservation(req, res, next);

  } catch (error) {
    next(error);
  }
});

export default router;

