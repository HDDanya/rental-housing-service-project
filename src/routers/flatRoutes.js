const router = require('express').Router();

const { renderFlat } = require('../controllers/flatControllers');

router.get('/', renderFlat);

module.exports = router;
