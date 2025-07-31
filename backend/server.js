//external imports
import express from "express";
import dotenv from "dotenv";

//internal imports
import { connectDb } from "./db/connectDb.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/auth", authRoute);

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(` ⚙️  Server is running on port ${PORT}`);
      console.log(` 🥌 http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
  });
