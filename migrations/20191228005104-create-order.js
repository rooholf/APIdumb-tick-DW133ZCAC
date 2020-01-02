'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model:'events',
          key:'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model:'users',
          key:'id'
        },
        onDelete:'cascade',
        onUpdate:'cascade'
      },
      paymentStatus: {
        type: Sequelize.BOOLEAN
      },
      confirmStatus: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('orders');
  }
};