require("dotenv").config();
const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");

app.use(express.json());

app.use("/api/auth", authRoutes);

// test protected route
app.get(
  "/api/profile",
  require("./middlewares/authMiddlewares"),
  (req, res) => {
    res.json({ message: `Selamat datang ${req.user.username}` });
  }
);

app.listen(process.env.PORT, () => {
  console.log(`Server berjalan di http://localhost:${process.env.PORT}`);
});
