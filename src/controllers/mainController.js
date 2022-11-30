const renderTemplate = require('../lib/renderReactModel');

const { Flat, House, Apartment } = require('../../db/models');
const Main = require('../views/Main');

const renderMain = async (req, res) => {
  try {
    const flat = await Flat.findAll({ raw: true });
    const house = await House.findAll({ raw: true });
    const apartment = await Apartment.findAll({ raw: true });
    // console.log('🚀 ~ house', house);
    const user = req.session.newUser;
    renderTemplate(Main, {
      flat, house, apartment, user,
    }, res);
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { renderMain };
