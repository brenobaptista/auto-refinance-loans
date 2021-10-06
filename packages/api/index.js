const express = require("express");
const cors = require("cors");
const loans = require("./data/loans.json");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.disable("x-powered-by");

app.use(express.static("data"));

app.get("/loans", (req, res) => {
  res.send(loans);
});

app.listen(3333);
