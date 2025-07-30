import express from "express";

const authRoute = express.Router();

authRoute.get("/signup", (req, res) => {
  res.send("signup");
});

authRoute.get("/login", (req, res) => {
  res.send("login");
});

export default authRoute;
