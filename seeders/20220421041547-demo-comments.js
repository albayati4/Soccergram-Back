'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comments', {
      body: 'Welcome to SoccerGram!',
      likes: '',
      postId: 2,
      userId: 2,
    }, {
      body: 'I love Soccer too! Who\'s you\'re team?',
      likes: '',
      postId: 2,
      userId: 1,
    }, {
      body: 'You play soccer? Or just a fan?',
      likes: '',
      postId: 4,
      userId: 3,
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, {})
  }
};
