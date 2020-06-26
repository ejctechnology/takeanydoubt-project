const express = require("express");

const PORT = 3000;
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/content", (req, res) => {
  res.render("content");
});
app.get("/pricing", (req, res) => {
  res.render("pricing");
});
app.get("/tutoring", (req, res) => {
  res.render("tutoring");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/signin", (req, res) => {
  res.render("signin");
});

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
