'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isUnique: (value, next)=>{
          user.findOne({ where: { email: value }})
            .then(result => {
              // reject when different user use same email
              if (result === null) {
                return next();
              }else{
                return next("email already in use!");
              }
            })
            .catch(err => next(err));
        }
      }
    },
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    img: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    user.hasMany(models.event, {
      as: 'event',
      foreignKey: 'userId'
    }),
    user.hasMany(models.order, {
      as: 'order',
      foreignKey: 'userId'
    })
  };
  return user;
};