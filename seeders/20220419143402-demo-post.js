'use strict';

const { query } = require("express");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [{
      title: 'First Game of the Season',
      body: 'Our first game was today! Sadly, we have a lot to work on',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'Improving',
      body: 'We\'re getting better but still more work needs to be done',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
