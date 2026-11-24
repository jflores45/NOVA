"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import authRoutes from "./routes/authRoutes";
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const editorialRoutes_1 = __importDefault(require("./routes/editorialRoutes"));
const trendRoutes_1 = __importDefault(require("./routes/trendRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const cartRoutes_1 = __importDefault(require("./routes/cartRoutes"));
const wishlistRoutes_1 = __importDefault(require("./routes/wishlistRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes_1.default);
app.use("/api/editorial", editorialRoutes_1.default);
app.use("/api/trends", trendRoutes_1.default);
app.use("/api/products", productRoutes_1.default);
app.use("/api/cart", cartRoutes_1.default);
app.use("/api/wishlist", wishlistRoutes_1.default);
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
