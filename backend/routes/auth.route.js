import express from "express";
import { login, signup, verifyEmail } from "../controllers/auth.controller.js";

const authRoute = express.Router();

authRoute.post("/signup", signup);
authRoute.post("/verify-email", verifyEmail);

export default authRoute;
