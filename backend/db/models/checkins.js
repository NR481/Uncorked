'use strict';
module.exports = (sequelize, DataTypes) => {
  const Checkins = sequelize.define('Checkins', {
    comment: {
      type: DataTypes.TEXT,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wineryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wineId: {
      type: DataTypes.INTEGER,
      allowNull: false}
  }, {});
  Checkins.associate = function(models) {
    // associations can be defined here
  };
  return Checkins;
};
