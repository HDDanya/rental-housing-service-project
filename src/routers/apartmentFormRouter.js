const express = require('express');

const router = express.Router();
const { isAdmin } = require('../middlewares/common');
const { renderApart, postApart } = require('../controllers/apartmentFormController');

router.get('/', isAdmin, renderApart);
router.post('/', isAdmin, postApart);

module.exports = router;
