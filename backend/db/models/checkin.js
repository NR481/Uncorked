'use strict';
module.exports = (sequelize, DataTypes) => {
  const Checkin = sequelize.define('Checkin', {
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
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Checkin.associate = function(models) {
    Checkin.belongsTo(models.User, { foreignKey: 'userId' }),
    Checkin.belongsTo(models.Winery, { foreignKey: 'wineryId' }),
    Checkin.belongsTo(models.Wine, { foreignKey: 'wineId' }),
    Checkin.hasMany(models.Comment, { foreignKey: 'checkinId', onDelete: 'CASCADE', hooks: true })
  };
  return Checkin;
};
