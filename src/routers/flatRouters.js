const express = require('express');

const router = express.Router();

const { renderFlat } = require('../controllers/flatControllers');

router.get('/', renderFlat);

module.exports = router;