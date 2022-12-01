const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({
      Flat, House, Apartment, Favorite,
    }) {
      this.hasMany(Flat, { foreignKey: 'user_id' });
      this.hasMany(House, { foreignKey: 'user_id' });
      this.hasMany(Apartment, { foreignKey: 'user_id' });
      this.hasOne(Favorite, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
