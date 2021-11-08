'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wine_admin = sequelize.define('Winery_admin', {
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
  Wine_admin.associate = function(models) {
    // associations can be defined here
  };
  return Wine_admin;
};
