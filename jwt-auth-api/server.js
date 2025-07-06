const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middlewares/authMiddlewares");

dotenv.config();
const app = express();
app.use(express.json());

// KONEKSI ke MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// Routes
app.use("/api/auth", authRoutes);

// Protected route
app.get("/api/profile", authMiddleware, (req, res) => {
  res.json({ message: `Selamat datang ${req.user.username}` });
});

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
  console.log("Available routes:");
  console.log("- GET /");
  console.log("- POST /api/auth/register");
  console.log("- POST /api/auth/login");
  console.log("- GET /api/profile (protected)");
});
