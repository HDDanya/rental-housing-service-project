const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      House, Flat, Apartment, User,
    }) {
      this.belongsTo(House, { foreignKey: 'house_id' });
      this.belongsTo(Flat, { foreignKey: 'flat_id' });
      this.belongsTo(Apartment, { foreignKey: 'appartament_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Favorite.init({
    user_id: DataTypes.INTEGER,
    flat_id: DataTypes.INTEGER,
    house_id: DataTypes.INTEGER,
    appartament_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
