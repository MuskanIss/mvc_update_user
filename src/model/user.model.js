const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

User = mongoose.model("user", userSchema);

module.exports = User;
