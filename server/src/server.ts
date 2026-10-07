import "dotenv/config";
import express from "express";
import cors from "cors";

// import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import editorialRoutes from "./routes/editorialRoutes";
import trendRoutes from "./routes/trendRoutes";
import productRoutes from "./routes/productRoutes";
import cartRoutes from "./routes/cartRoutes";
import wishlistRoutes from "./routes/wishlistRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/editorial", editorialRoutes);
app.use("/api/trend", trendRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishlistRoutes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});