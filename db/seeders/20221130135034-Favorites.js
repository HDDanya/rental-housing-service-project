/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Favorites', [{
      user_id: 1,
      flat_id: 2,
      house_id: null,
      appartament_id: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      flat_id: 3,
      house_id: null,
      appartament_id: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      flat_id: null,
      house_id: 1,
      appartament_id: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      flat_id: null,
      house_id: null,
      appartament_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      flat_id: null,
      house_id: null,
      appartament_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      flat_id: null,
      house_id: 2,
      appartament_id: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      flat_id: null,
      house_id: null,
      appartament_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
