'use strict';
module.exports = (sequelize, DataTypes) => {
  const Winery = sequelize.define('Winery', {
    name: {
      type: DataTypes.STRING(50),
      location: DataTypes.STRING(50),
      allowNull: false
    }
  }, {});
  Winery.associate = function(models) {
    // associations can be defined here
  };
  return Winery;
};
