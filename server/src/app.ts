
import express from "express";
import cors from "cors";

import userRoutes from "./routes/userRoutes";
import editorialRoutes from "./routes/editorialRoutes";
import trendRoutes from "./routes/trendRoutes";
import productRoutes from "./routes/productRoutes";
import cartRoutes from "./routes/cartRoutes";
import wishlistRoutes from "./routes/wishlistRoutes";

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://nova-6en5.onrender.com"
  ],
  credentials: true
}));

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "NOVA backend is running"
  });
});

app.use("/api/user", userRoutes);
app.use("/api/editorial", editorialRoutes);
app.use("/api/trends", trendRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishlistRoutes);

export default app;
