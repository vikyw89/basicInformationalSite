const express = require("express");
const fs = require("fs/promises");
const app = express();
const port = 8080;

app.get("/", async (req, res) => {
  const data = await fs.readFile("./index.html", "utf8");
  res.send(data);
});

app.get("/about", async (req, res) => {
  const data = await fs.readFile("./about.html", "utf8");
  res.send(data);
});

app.get("/contact-me", async (req, res) => {
  const data = await fs.readFile("./contact-me.html", "utf8");
  res.send(data);
});

app.use(async (req, res) => {
  const data = await fs.readFile("./404.html", "utf8");
  res.status(404).send(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
