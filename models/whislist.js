'use strict';
module.exports = (sequelize, DataTypes) => {
  const whislist = sequelize.define('wishlist', {
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  whislist.associate = function(models) {
    // associations can be defined here
    order.belongsTo(models.event, {
      as: 'event',
      foreignKey: 'eventId'
    }),
    order.belongsTo(models.user, {
      as: 'user',
      foreignKey: 'userId'
    })
  };
  return whislist;
};