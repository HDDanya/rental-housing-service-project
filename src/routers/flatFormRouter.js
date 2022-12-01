const express = require('express');

const router = express.Router();
const { isAdmin } = require('../middlewares/common');
const { renderFlat, postFlat } = require('../controllers/flatFormController');

router.get('/', isAdmin, renderFlat);
router.post('/', isAdmin, postFlat);

module.exports = router;
