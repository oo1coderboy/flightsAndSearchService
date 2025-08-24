'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Kempegowda International Airport',
        address: 'Devanahalli, Bengaluru, Karnataka',
        cityId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chhatrapati Shivaji Maharaj International Airport',
        address: 'Sahar, Andheri East, Mumbai, Maharashtra',
        cityId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Indira Gandhi International Airport',
        address: 'Palam, New Delhi',
        cityId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rajiv Gandhi International Airport',
        address: 'Shamshabad, Hyderabad, Telangana',
        cityId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Netaji Subhas Chandra Bose International Airport',
        address: 'Dum Dum, Kolkata, West Bengal',
        cityId: 15,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chennai International Airport',
        address: 'Meenambakkam, Chennai, Tamil Nadu',
        cityId: 16,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sardar Vallabhbhai Patel International Airport',
        address: 'Hansol, Ahmedabad, Gujarat',
        cityId: 17,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cochin International Airport',
        address: 'Nedumbassery, Kochi, Kerala',
        cityId: 18,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pune International Airport',
        address: 'Lohegaon, Pune, Maharashtra',
        cityId: 19,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jaipur International Airport',
        address: 'Sanganer, Jaipur, Rajasthan',
        cityId: 20,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Goa International Airport',
        address: 'Dabolim, Goa',
        cityId: 21,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Visakhapatnam International Airport',
        address: 'Marripalem, Visakhapatnam, Andhra Pradesh',
        cityId: 22,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lucknow Chaudhary Charan Singh International Airport',
        address: 'Amausi, Lucknow, Uttar Pradesh',
        cityId: 23,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Trivandrum International Airport',
        address: 'Vallakkadavu, Thiruvananthapuram, Kerala',
        cityId: 24,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Biju Patnaik International Airport',
        address: 'Aerodrome Area, Bhubaneswar, Odisha',
        cityId: 25,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Amritsar Sri Guru Ram Dass Jee International Airport',
        address: 'Raja Sansi, Amritsar, Punjab',
        cityId: 26,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nagpur Dr. Babasaheb Ambedkar International Airport',
        address: 'Sonegaon, Nagpur, Maharashtra',
        cityId: 27,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mangalore International Airport',
        address: 'Bajpe, Mangaluru, Karnataka',
        cityId: 28,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Patna Jay Prakash Narayan International Airport',
        address: 'Shaheed Pir Ali Khan Marg, Patna, Bihar',
        cityId: 29,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ranchi Birsa Munda Airport',
        address: 'Hinoo, Ranchi, Jharkhand',
        cityId: 30,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
