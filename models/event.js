'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event', {
    title: DataTypes.STRING,
    category: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    content: DataTypes.STRING,
    address: DataTypes.STRING,
    img: DataTypes.STRING,
    urlMaps: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    userId: DataTypes.INTEGER
  }, {});
  event.associate = function(models) {
    // associations can be defined here
    event.belongsTo(models.category, {
      as: 'categories',
      foreignKey: 'category'
    }),
    event.belongsTo(models.user, {
      as: 'user',
      foreignKey: 'userId'
    }),
    event.hasMany(models.order, {
      as: 'order',
      foreignKey: 'eventId'
    })
    // event.hasOne(models.category,{
    //   as:'categories',
    //   foreignKey: 'category'
    // })
  };
  return event;
};