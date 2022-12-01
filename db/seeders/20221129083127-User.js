'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Anton',
      email: 'a@a.ru',
      password: '123',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Sergey',
      email: 'b@b.ru',
      password: '11111',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
