const renderTemplate = require('../lib/renderReactModel');
const { House } = require('../../db/models');
const HouseVieus = require('../views/House');

const renderHousePage = async (req, res) => {
  try {
    const house = await House.findAll({ raw: true });
    const user = req.session.newUser;
    renderTemplate(HouseVieus, { house, user }, res);
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
};

module.exports = { renderHousePage };
