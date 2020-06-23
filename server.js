const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Rocket!");
});
app.get("/node", (req, res) => {
  res.send("Node + Express = Love");
});
app.get("/codeyourfuture", (req, res) => {
  res.send({ cyf: "It's the best!" });
});

app.get("/chocolate", (req, res) => {
  const { qty, flavour } = req.query;
  res.send(`${qty}  Chocolates with   ${flavour}`);
});

app.listen(3000, () => {
  console.log("Listening to port 3000! 🚀");
});
