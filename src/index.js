require("dotenv").config();
const express = require("express");

const connect = require("./configs/db");
const mongoose = require("mongoose");
const books = require("./controller/book.controller");
const authors = require("./controller/author.controller");
const sections = require("./controller/section.controller");
const users = require("./controller/user.controller");

let app = express();
app.use(express.json());

app.use("/books", books);
app.use("/authors", authors);
app.use("/sections", sections);
app.use("/users", users);

app.listen(process.env.PORT, async () => {
  try {
    await connect();
    console.log("Running on PORT: ", process.env.PORT);
  } catch (e) {
    console.log(e.message);
  }
});
