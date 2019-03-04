const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => res.send("Hello!"));

const db = require("./config/keys").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("DB Connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on port ${port}`));
