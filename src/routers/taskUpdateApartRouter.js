const express = require('express');

const router = express.Router();

const { isAdmin } = require('../middlewares/common');
const { renderUpdateApart, patchUpdateApart } = require('../controllers/taskUpdateContoller');

router
    .get('/:id', isAdmin, renderUpdateApart)
    .patch('/:id', isAdmin, patchUpdateApart);

module.exports = router;