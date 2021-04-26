'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.createTable('donors', {
        id:{
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
       },
       fk_institut: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      fk_representative: {
        type: Sequelize.UUID,
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      value: {
        type: Sequelize.FLOAT,
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

     await queryInterface.dropTable('donors');
     
  }
};
