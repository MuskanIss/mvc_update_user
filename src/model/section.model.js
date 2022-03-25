const mongoose = require("mongoose");

let sectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

Section = mongoose.model("section", sectionSchema);

module.exports = Section;
