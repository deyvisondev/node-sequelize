'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'users',
      'age',
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'users',
      'age',
    );
  }
};

/* COMANDO PARA CRIAR MIGRATES 

  yarn sequelize migration:create --name=add-age-to-users

  COMANDO PARA RODAR A MIGRATE

  yarn sequelize db:migrate
  
  COMANDO PARA DAR ROLLBACK NO ÚLTIMO MIGRATE

  yarn sequelize db:migrate:undo
  
  */