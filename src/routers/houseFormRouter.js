const express = require('express');

const router = express.Router();
const { isAdmin } = require('../middlewares/common');
const { renderHouse, postHouse } = require('../controllers/houseFormController');

router.get('/', isAdmin, renderHouse);
router.post('/', isAdmin, postHouse);

module.exports = router;
