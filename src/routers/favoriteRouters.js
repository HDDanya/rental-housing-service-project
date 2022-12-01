const express = require('express');

const router = express.Router();

const { renderFavorite } = require('../controllers/favoriteControllers');

router.get('/favorite', renderFavorite);

module.exports = router;
