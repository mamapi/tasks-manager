'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('tasks', 'status',
      {
        type: Sequelize.STRING(20),
        allowNull: false
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return  queryInterface.removeColumn('users', 'email')
  }
};
