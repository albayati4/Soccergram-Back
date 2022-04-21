'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('user_followers', [{
      user_id: 1,
      follower_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 1,
      follower_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 1,
      follower_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 2,
      follower_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 2,
      follower_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      user_id: 3,
      follower_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user_followers', null, {})
  }
};
