const express = require("express");
const app = express();

const PORT = 3000;

const friends = [
  {
    id: 1,
    name: "Albert Einstein",
  },
  {
    id: 2,
    name: "Isaac Newton",
  },
];

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = req.params.friendId;
  const friend = friends[friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend does not exist",
    });
  }
});

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
