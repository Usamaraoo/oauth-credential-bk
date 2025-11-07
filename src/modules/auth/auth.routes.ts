import { Router } from "express";
import { googleAuth, googleCallback } from "./google/auth.google.controller";
import { loginHandler } from "./auth.controller";

const router = Router();

router.post("/login", loginHandler);
router.get("/google", googleAuth);
router.get("/google/callback", googleCallback);

export default router;
