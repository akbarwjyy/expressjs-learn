const express = require("express");
const app = express();
const port = 3000;

const logger = require("./middleware/logger");
const userRoutes = require("./routes/user");

// Middleware custom
app.use(logger);

// Middleware bawaan express untuk parsing JSON
app.use(express.json());

// Routing modular
app.use("/users", userRoutes);

// Route utama
app.get("/", (req, res) => {
  res.send("Welcome to Express.js Examples!");
});

// Error handling (harus ditaruh paling bawah)
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
