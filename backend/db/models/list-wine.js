'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListWine = sequelize.define('ListWine', {
    listId: DataTypes.INTEGER,
    wineId: DataTypes.INTEGER
  }, {});
  ListWine.associate = function(models) {
    // associations can be defined here
  };
  return ListWine;
};
