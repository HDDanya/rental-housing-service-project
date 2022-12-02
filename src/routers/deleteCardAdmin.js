const express = require("express");

const router = express.Router();

const { deleteCard } = require("../controllers/deleteCardAdmin");

router.delete("/delete", deleteCard);

module.exports = router;
