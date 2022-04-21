'use strict';

const { query } = require("express");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('posts', [{
      title: 'My Demo Post',
      body: 'This is my demo post!',
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'My Test Post',
      body: 'This is my test post!',
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'My Example Post',
      body: 'This is my example post!',
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'My Trial Post',
      body: 'This is my trial post!',
      user_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('posts', null, {});
  }
};
