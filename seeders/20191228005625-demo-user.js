'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

   return queryInterface.bulkInsert('users',[
    {
     name: 'admin',
     email: 'admin@dumb.com',
     password:'admin',
     phone: "081930100800",
     img:"https://raw.githubusercontent.com/Semantic-Org/Semantic-UI/master/examples/assets/images/avatar/tom.jpg"
    },
    {
      name: 'raisa',
      email: 'raisa@dumb.com',
      password: 'raisa',
      phone: "081234567890",
      img:"https://raw.githubusercontent.com/Semantic-Org/Semantic-UI/master/examples/assets/images/avatar/nan.jpg"
    }],{})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});

    */
   return queryInterface.bulkDelete('users', null, {});
  }
};
