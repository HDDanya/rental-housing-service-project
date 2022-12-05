const renderTemplate = require('../lib/renderReactModel');
const Apart = require('../views/AddApartment');
const { Apartment } = require('../../db/models');

const renderApart = (req, res) => {
    try {
        const user = req.session.newUser;
        renderTemplate(Apart, { user }, res);
    } catch (error) {
        console.log(error);
    }
};

const postApart = async (req, res) => {
    try {
        const {
            adress, photo, price, size, floor, type, cord,
        } = req.body;
        await Apartment.create({
            user_id: req.session.newUser.id, adress, photo, price, size, floor, type, cord,
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { renderApart, postApart };
