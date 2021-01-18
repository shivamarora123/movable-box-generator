const express = require("express");
const path = require("path");

// const { SERVER_PORT } = require("./src/config");

const app = express();
const port = "6001";
// SERVER_PORT;

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(port, () => {
  console.log(`Movable Box Generator server started listening at ${port}`);
});
