import express from "express";
import {
  forgotPassword,
  login,
  logout,
  resetPassword,
  signup,
  verifyEmail,
  checkAuth
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const authRoute = express.Router();

authRoute.get("/check-auth", protectRoute, checkAuth);
authRoute.post("/signup", signup);
authRoute.post("/login", login);
authRoute.post("/logout", logout);
authRoute.post("/forgot-password", forgotPassword);
authRoute.post("/verify-email", verifyEmail);
authRoute.post("/reset-password/:token", resetPassword);

export default authRoute;
