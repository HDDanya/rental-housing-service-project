const renderTemplate = require('../lib/renderReactModel');
const { Flat, House, Apartment } = require('../../db/models');
const FlatRender = require('../views/FlatRender');

const renderFlat = async (req, res) => {
  try {
    const flat = await Flat.findAll({ raw: true });
    const user = req.session.newUser;
    renderTemplate(FlatRender, { flat, user }, res);
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { renderFlat };
