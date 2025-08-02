import jwt from "jsonwebtoken";

export const protectRoute = (req, res, next) => {
  const token = req.cookies.token;
  try {
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized - No Token Provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized - Invalid Token" });
    }

    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("Error in protectRoute middleware:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
