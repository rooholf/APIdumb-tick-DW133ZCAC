'use strict';
module.exports = (sequelize, DataTypes) => {
  const wishlist = sequelize.define('wishlist', {
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  wishlist.associate = function(models) {
    // associations can be defined here
    wishlist.belongsTo(models.event, {
      as: 'event',
      foreignKey: 'eventId'
    }),
    wishlist.belongsTo(models.user, {
      as: 'user',
      foreignKey: 'userId'
    })
  };
  return wishlist;
};