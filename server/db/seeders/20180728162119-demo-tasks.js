'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [
      {
        name: 'Get conference tickets',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'New'
      },
      {
        name: 'Buy new office desk',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'New'
      },
      {
        name: 'Talk to Mike',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'New'
      },
      {
        name: 'Review contract with pr agency',
        description: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'New'
      },
      {
        name: 'Book venue',
        description: 'Book venue for party',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'New'
      },   
      {
        name: 'Call Mike',
        description: 'Call Mike',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'New'
      },         
      {
        name: 'Complete documentation',
        description: 'Camplete project documentation',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'New'
      },         
      {
        name: 'Prepare ad compaign',
        description: 'Prepare ad compaign',
        createdAt: new Date(),
        updatedAt: new Date(),
        status: 'New'
      },     ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Tasks', null, {});
  }
};
