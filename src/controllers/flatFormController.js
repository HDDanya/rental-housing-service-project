const renderTemplate = require('../lib/renderReactModel');
const Fflat = require('../views/AddFlat');
const { Flat } = require('../../db/models');

const renderFlat = (req, res) => {
    const user = req.session.newUser;
    try {
        const user = req.session.newUser;
        renderTemplate(Fflat, { user }, res);
    } catch (error) {
        console.log(error);
    }
};

const postFlat = async (req, res) => {
    try {
        const { adress, photo, price, size, floor } = req.body;
        await Flat.create({ user_id: req.session.newUser.id, adress, photo, price, size, floor });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { renderFlat, postFlat };
