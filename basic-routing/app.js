const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.post("/submit", (req, res) => {
  res.send("Form Submitted");
});

app.put("/update", (req, res) => {
  res.send("Data Updated");
});

app.delete("/delete", (req, res) => {
  res.send("Data Deleted");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
