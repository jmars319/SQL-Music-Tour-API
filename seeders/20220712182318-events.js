'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [{
      name: 'FyreFest',
      date: '2022-03-19',
      start_time: '2022-03-19T04:33:12.000Z',
      end_time: '2022-03-19T05:33:12.000Z'
    }])
  },

  async down (queryInterface, Sequelize) {
    
  }
};