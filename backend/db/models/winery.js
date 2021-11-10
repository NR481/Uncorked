'use strict';
module.exports = (sequelize, DataTypes) => {
  const Winery = sequelize.define('Winery', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {});
  Winery.associate = function(models) {
    Winery.hasMany(models.Checkin, { foreignKey: 'wineryId' }),
    Winery.hasMany(models.Wine, { foreignKey: 'wineryId' }),
    Winery.hasOne(models.WineryAdmin, { foreignKey: 'wineryId' })
  };
  return Winery;
};
