const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Helloo Albert!</ul></li>");
});

app.post("/messages", (req, res) => {
  console.log("Updating messages...");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
