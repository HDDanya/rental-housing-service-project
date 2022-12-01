const express = require('express');

const router = express.Router();

const { isAdmin } = require('../middlewares/common');

const { renderUpdateHouse, patchUpdateHouse } = require('../controllers/taskUpdateContoller');

router
    .get('/:id', isAdmin, renderUpdateHouse)
    .patch('/:id', isAdmin, patchUpdateHouse);

module.exports = router;