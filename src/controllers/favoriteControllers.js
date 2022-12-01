const renderTemplate = require('../lib/renderReactModel');
const {
  Favorite, User, Flat, Apartment, House,
} = require('../../db/models');

const FavoriteRender = require('../views/FavoriteRender');

const renderFavorite = async (req, res) => {
  try {
    const user = req.session.newUser;

    const favoriteFlat = await Favorite.findAll({
      // тут надо везде вместо 1 заменить на user id из сесии
      where: { user_id: 1 },
      include: [
        { model: Flat, where: { user_id: 1 } },
        // { model: Apartment, where: { user_id: 1 } },
        // { model: House, where: { user_id: 1 } },
      ],
    });
    const flat = favoriteFlat.map((el) => el.Flat);

    const favoriteAppartament = await Favorite.findAll({
      where: { user_id: 1 },
      include: [
        // { model: Flat, where: { user_id: 1 } },
        { model: Apartment, where: { user_id: 1 } },
        // { model: House, where: { user_id: 1 } },
      ],
    });
    const appartament = favoriteAppartament.map((el) => el.Apartment);

    const favoriteHouse = await Favorite.findAll({
      where: { user_id: 1 },
      include: [
        // { model: Flat, where: { user_id: 1 } },
        // { model: Apartment, where: { user_id: 1 } },
        { model: House, where: { user_id: 1 }, raw: true },

      ],
    });
    const house = favoriteHouse.map((el) => el.House);

    // res.json({appartament, house});
    renderTemplate(FavoriteRender, {
      flat, appartament, house, user,
    }, res);
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { renderFavorite };
