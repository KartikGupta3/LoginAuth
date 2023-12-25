const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/User");

app.post("/register", (req, res) => {
  UserModel.create(req.body);
});

app.listen(4170, () => {
  console.log("Server Started");
});
