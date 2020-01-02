'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: DataTypes.STRING,
    color: DataTypes.STRING
  }, {});
  category.associate = function(models) {
    // associations can be defined here
    category.hasMany(models.event, {
      as: 'event',
      foreignKey: 'category'
    })
  };
  return category;
};