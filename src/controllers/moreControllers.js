const renderTemplate = require('../lib/renderReactModel');

const { Apartment } = require('../../db/models');
const { Flat } = require('../../db/models');
const { House } = require('../../db/models');

const OneApart = require('../views/oneApart');
const OneFlat = require('../views/oneFlat');
const OneHouse = require('../views/oneHouse');

const renderOneApart = async (req, res) => {
  try {
    const user = req.session.newUser;
    const { id } = req.params;
    console.log('apart_id===========>>>', id);

    const oneApartItem = await Apartment.findOne({ where: { id }, raw: true });
    console.log('oneApartItem==========', oneApartItem);

    renderTemplate(OneApart, { oneApartItem, user }, res);
  } catch (error) {
    console.log('=====ERROR FIND ITEM FROM APARTMENT DB========', error);
  }
};

const renderOneFlat = async (req, res) => {
  try {
    const user = req.session.newUser;
    // console.log('user===========>>>', user);
    const { id } = req.params;
    console.log('flat_id===========>>>', id);

    const oneFlatItem = await Flat.findOne({ where: { id }, raw: true });

    console.log('oneApartItem=========>>>', oneFlatItem);
    console.log('ДАЛЬШЕ РЕНДЕР!!!!!!!!!!!!!!!!!!!');
    console.log('oneFlatItem==========', oneFlatItem);

    renderTemplate(OneFlat, { oneFlatItem, user }, res);

    console.log('ЗАШЛИ????????????');
  } catch (error) {
    console.log('=============ERROR FIND ITEM FROM APARTMENT DB==========', error);
  }
};

const renderOneHouse = async (req, res) => {
  try {
    const user = req.session.newUser;
    // console.log('user===========>>>', user);
    const { id } = req.params;
    console.log('house_id===========>>>', id);

    const oneHouseItem = await House.findOne({ where: { id }, raw: true });

    console.log('oneApartItem=========>>>', oneHouseItem);
    console.log('ДАЛЬШЕ РЕНДЕР!!!!!!!!!!!!!!!!!!!');
    console.log('oneHouseItem==========', oneHouseItem);

    renderTemplate(OneHouse, { oneHouseItem, user }, res);

    console.log('ЗАШЛИ????????????');
  } catch (error) {
    console.log('=============ERROR FIND ITEM FROM APARTMENT DB==========', error);
  }
};

module.exports = { renderOneApart, renderOneFlat, renderOneHouse };
