const express = require("express");
const User = require("../model/user.model");
const model = require("./item.controller");
let router = express.Router();

router.get("/", model(User).getAll);
router.post("/", model(User).postOne);
router.get("/:id", model(User).getOne);
router.patch("/:id", model(User).patchOne);
router.delete("/:id", model(User).deleteOne);

module.exports = router;
