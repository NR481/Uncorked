'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  List.associate = function(models) {
    const columnMapping = {
      through: 'ListWine',
      foreignKey: 'listId',
      otherKey: 'wineId'
    };

    List.belongsTo(models.User, { foreignKey: 'userId' }),
    List.belongsToMany(models.Wine, columnMapping),
    List.hasMany(models.ListWine, { foreignKey: 'listId', onDelete: 'CASCADE', hooks: true })
  };
  return List;
};
