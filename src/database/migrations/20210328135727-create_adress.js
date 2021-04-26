'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.createTable('adresses', {
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
       zip_code: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
       city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      complement: {
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

     await queryInterface.dropTable('adresses');
     
  }
};
