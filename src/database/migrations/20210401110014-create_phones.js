'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.createTable('phones', {
      id: {
         type: Sequelize.INTEGER,
         autoIncrement: true,
         primaryKey: true,
         allowNull: false,
       },
       fk_tables_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
       residential_phone: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      celphone_1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      celphone_2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
     });
   
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.dropTable('phones');
     
  }
};
