'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.createTable('admingenerals', {
      id:{
         type: Sequelize.UUID,
         defaultValue: Sequelize.UUIDV4,
         primaryKey: true,
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

     await queryInterface.dropTable('admingenerals');
     
  }
};
