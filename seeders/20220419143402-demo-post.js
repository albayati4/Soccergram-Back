'use strict';

const { query } = require("express");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [{
      title: 'My Very First Post',
      body: 'Today I created my first post on Soccergram!',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'I love soccer',
      body: 'I love soccer so much. That\'s why I joined Soccergram',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
