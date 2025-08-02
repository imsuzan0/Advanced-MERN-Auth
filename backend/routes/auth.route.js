import express from "express";
import {
  forgotPassword,
  login,
  logout,
  resetPassword,
  signup,
  verifyEmail,
} from "../controllers/auth.controller.js";

const authRoute = express.Router();

authRoute.post("/signup", signup);
authRoute.post("/login", login);
authRoute.post("/logout", logout);
authRoute.post("/forgot-password", forgotPassword);
authRoute.post("/verify-email", verifyEmail);
authRoute.post("/reset-password/:token", resetPassword);

export default authRoute;
