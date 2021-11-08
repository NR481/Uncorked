'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wine = sequelize.define('Wine', {
    name: {
      type: DataTypes.STRING(256),
      allowNull: false,
      unique: true
    },
    image: {
      type: DataTypes.STRING(280),
      allowNull: false
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
    }
  }, {});
  Wine.associate = function(models) {
    // associations can be defined here
  };
  return Wine;
};
