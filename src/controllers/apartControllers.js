const renderTemplate = require('../lib/renderReactModel');

const { Apartment } = require('../../db/models');

const { Apart } = require('../views/Apart');

const renderApart = async (req, res) => {
  try {
    const apart = await Apartment.findAll({ raw: true });
    const user = req.session.newUser;
    renderTemplate(Apart, { apart, user }, res);
  } catch (error) {
    console.log('ERROR FIND ITEM FROM DB', error);
  }
};

module.exports = { renderApart };
