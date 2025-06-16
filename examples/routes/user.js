const express = require("express");
const router = express.Router();

// Dummy data
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// GET /users/
router.get("/", (req, res) => {
  res.json(users);
});

// GET /users/:id
router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).send("User not found");
  }
  res.json(user);
});

module.exports = router;
