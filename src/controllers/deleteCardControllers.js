const { Apartment, Flat, House } = require('../../db/models');

const deleteCard = async (req, res) => {
  const { id, type } = req.body;
  try {
    if (type === 'apart') {
      await Apartment.destroy({ where: { id } });
    }
    if (type === 'flat') {
      await Flat.destroy({ where: { id } });
    }
    if (type === 'house') {
      await House.destroy({ where: { id } });
    }
  } catch (error) {
    console.error('Ошибка удаления', err.message);
  }
};

module.exports = { deleteCard };
