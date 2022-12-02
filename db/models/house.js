'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      this.belongsTo(User, { foreignKey: "id" })
    }
  }
  House.init({
    user_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    adress: DataTypes.STRING,
    photo: DataTypes.STRING,
    size: DataTypes.INTEGER,
    cord: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'House',
  });
  return House;
};