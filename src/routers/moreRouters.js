const router = require('express').Router();

const { renderOneApart, renderOneFlat, renderOneHouse } = require('../controllers/moreControllers');

router.get('/apart/:id', renderOneApart);
router.get('/flat/:id', renderOneFlat);
router.get('/house/:id', renderOneHouse);

module.exports = router;
