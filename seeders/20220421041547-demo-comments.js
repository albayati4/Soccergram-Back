'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comments', [{
      body: 'This is a demo comment! Hey from user_id:2.',
      likes: '',
      post_id: 1,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      body: 'This is a test comment. Howdy from user_id:1!',
      likes: '',
      post_id: 2,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      body: 'This is an example comment. User_id:3, here',
      likes: '',
      post_id: 3,
      user_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      body: 'This is an trial comment. User_id:4, here',
      likes: '',
      post_id: 4,
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {})
  }
};
