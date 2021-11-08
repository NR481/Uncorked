'use strict';
module.exports = (sequelize, DataTypes) => {
  const WineryAdmin = sequelize.define('WineryAdmin', {
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING(256),
      allowNull: false,
      unique: true
    },
    wineryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    }
  }, {});
  WineryAdmin.associate = function(models) {
    WineryAdmin.belongsTo(models.Winery, { foreignKey: 'wineryId' })
  };
  return WineryAdmin;
};
