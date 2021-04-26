'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.createTable('representatives', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      fk_institut: {
        type: Sequelize.UUID,
        allowNull: false,
      },
       name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number_social: {
        type: Sequelize.STRING,
        allowNull: false
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

     await queryInterface.dropTable('representatives');
     
  }
};
