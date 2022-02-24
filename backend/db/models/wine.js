'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wine = sequelize.define('Wine', {
    name: {
      type: DataTypes.STRING(256),
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.STRING(280)
    },
    vintage: {
      type: DataTypes.NUMERIC(4),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    varietal: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    wineryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Wine.associate = function(models) {
    Wine.hasMany(models.Checkin, { foreignKey: 'wineId', onDelete: 'CASCADE', hooks: true }),
    Wine.belongsTo(models.Winery, { foreignKey: 'wineryId' }),
    Wine.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Wine;
};
