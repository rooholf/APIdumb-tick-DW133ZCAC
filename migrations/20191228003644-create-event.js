'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:'categories',
          key:'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },
      price: {
        type: Sequelize.INTEGER
      },
      desc: {
        type: Sequelize.STRING
      },
      content:{
        type: Sequelize.TEXT
      },
      address: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      urlMaps: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      start: {
        type: Sequelize.DATE
      },
      end: {
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:'users',
          key:'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('events');
  }
};