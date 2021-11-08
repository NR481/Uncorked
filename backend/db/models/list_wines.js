'use strict';
module.exports = (sequelize, DataTypes) => {
  const List_wines = sequelize.define('List_wines', {
    listId: DataTypes.INTEGER,
    wineId: DataTypes.INTEGER
  }, {});
  List_wines.associate = function(models) {
    // associations can be defined here
  };
  return List_wines;
};