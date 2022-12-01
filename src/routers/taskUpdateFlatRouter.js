const express = require('express');

const router = express.Router();

const { isAdmin } = require('../middlewares/common');

const { renderUpdateFlat, patchUpdateFlat } = require('../controllers/taskUpdateContoller');

router
    .get('/:id', isAdmin, renderUpdateFlat)
    .patch('/:id', isAdmin, patchUpdateFlat);

module.exports = router;