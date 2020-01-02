'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    paymentStatus: DataTypes.BOOLEAN,
    confirmStatus: DataTypes.BOOLEAN
  }, {});
  order.associate = function(models) {
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
  return order;
};