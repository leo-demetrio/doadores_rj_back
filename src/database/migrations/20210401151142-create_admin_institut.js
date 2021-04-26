'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.createTable('admininstituts', {
      id: {
         type: Sequelize.UUID,
         primaryKey: true,
         allowNull: false,
       },
       fk_institut: {
        type: Sequelize.UUID,
        allowNull: false,
       },
       cpf: {
         type: Sequelize.STRING,
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
      level: {
        type: Sequelize.INTEGER,
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

     await queryInterface.dropTable('admininstituts');
     
  }
};
