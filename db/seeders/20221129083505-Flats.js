/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Flats', [{
      user_id: 1,
      price: 1000,
      adress: 'Кропоткина 3',
      photo: '/img/flat/2.jpg',
      size: 24,
      floor: 3,
      cord: '55.642335082943674,37.94256333309938',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 1200,
      adress: 'Пушкина 24',
      photo: '/img/flat/1.jpg',
      size: 19,
      floor: 15,
      cord: '55.647457232052695,37.938483919578594',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 2000,
      adress: 'Калатушкина 14',
      photo: '/img/flat/3.jpg',
      size: 27,
      floor: 2,
      cord: '55.649103044628454,37.93898850189476',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 900,
      adress: 'Заводская 14',
      photo: '/img/flat/4.jpg',
      size: 18,
      floor: 5,
      cord: '55.649103044628454,37.93898850189476',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      price: 1000,
      adress: 'Кропоткина 3',
      photo: '/img/flat/2.jpg',
      size: 24,
      floor: 3,
      cord: '55.649103044628454,37.93898850189476',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 1200,
      adress: 'Пушкина 24',
      photo: '/img/flat/1.jpg',
      size: 19,
      floor: 15,
      cord: '55.649103044628454,37.93898850189476',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 2000,
      adress: 'Калатушкина 14',
      photo: '/img/flat/3.jpg',
      size: 27,
      floor: 2,
      cord: '55.649103044628454,37.93898850189476',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 900,
      adress: 'Заводская 14',
      photo: '/img/flat/1.jpg',
      size: 18,
      floor: 5,
      cord: '55.649103044628454,37.93898850189476',
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
