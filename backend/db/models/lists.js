'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lists = sequelize.define('Lists', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Lists.associate = function(models) {
    // associations can be defined here
  };
  return Lists;
};