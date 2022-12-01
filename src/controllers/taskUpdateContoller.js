const renderTemplate = require('../lib/renderReactModel');
const UpdateApart = require('../views/UpdateApartment');
const UpdateFlat = require('../views/UpdateFlat');
const UpdateHouse = require('../views/UpdateHouse');
const { Apartment, House, Flat } = require('../../db/models');

const renderUpdateApart = async (req, res) => {
    try {
        const user = req.session.newUser;
        const task = await Apartment.findOne({ where: { id: req.params.id } });
        renderTemplate(UpdateApart, { user, task }, res)
    } catch (error) {
        console.log(error);
    }
}

const renderUpdateHouse = async (req, res) => {
    try {
        const user = req.session.newUser;
        const task = await House.findOne({ where: { id: req.params.id } });
        renderTemplate(UpdateHouse, { user, task }, res)
    } catch (error) {
        console.log(error);
    }
}

const renderUpdateFlat = async (req, res) => {
    try {
        const user = req.session.newUser;
        const task = await Flat.findOne({ where: { id: req.params.id } });
        renderTemplate(UpdateFlat, { user, task }, res)
    } catch (error) {
        console.log(error);
    }
}

const patchUpdateApart = async (req, res) => {
    try {
        const {
            taskId, adress, photo, price, size, floor, type,
        } = req.body;

        await Apartment.update({
             adress, photo, price, size, floor, type,
        }, {
            where: {
                id: taskId
            }
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
    }
}

const patchUpdateHouse = async (req, res) => {
    try {
        const {
            taskId, adress, photo, price, size
        } = req.body;

        await House.update({
            adress, photo, price, size
        }, {
            where: {
                id: taskId
            }
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
    }
}

const patchUpdateFlat = async (req, res) => {
    try {
        const {
            taskId, adress, photo, price, size, floor
        } = req.body;

        await Flat.update({
            adress, photo, price, size, floor
        }, {
            where: {
                id: taskId
            }
        });
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
    }
}
module.exports = { renderUpdateApart, renderUpdateFlat, renderUpdateHouse, patchUpdateApart, patchUpdateFlat, patchUpdateHouse };