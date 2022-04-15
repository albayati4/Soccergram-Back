'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      firstName: 'John',
      lastName: 'Demo', 
      email: 'John@Demo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Jill',
      lastName: 'Demo', 
      email: 'Jill@Demo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      firstName: 'Ben',
      lastName: 'Demo', 
      email: 'Ben@Demo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
