const renderTemplate = require('../lib/renderReactModel');
const Hhouse = require('../views/AddHouse');
const { House } = require('../../db/models');

const renderHouse = (req, res) => {
    try {
        const user = req.session.newUser;
        renderTemplate(Hhouse, { user }, res);
    } catch (error) {
        console.log(error);
    }
};

const postHouse = async (req, res) => {
    try {
        const {
            adress, photo, price, size, cord
        } = req.body;
        await House.create({
            user_id: req.session.newUser.id, adress, photo, price, size, cord
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { renderHouse, postHouse };
