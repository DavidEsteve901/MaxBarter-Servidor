'use strict';

const { Oferta } = require('../../models');
const { User } = require('../../models')
module.exports = {

  // Que se ejecuta cuando hacemos la siembra
  up: (queryInterface, Sequelize) => {

    return Promise.all([
      Oferta.create({
        activa:false,
        producto1:2,
        producto2:3,
        user1:3,
        user2:4
      }),
    ])
  },

  // Esto se ejecuta cuando se deshace la siembra
  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('ofertas', null, {});
  }
};
