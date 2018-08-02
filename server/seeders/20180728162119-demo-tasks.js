'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [
      {
        name: 'Task 1 ',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'New'
      },
      {
        name: 'Task 2',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'New'
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Tasks', null, {});
  }
};
