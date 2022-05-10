'use strict';

const { Oferta } = require('../../models');
const { User } = require('../../models')
module.exports = {

  // Que se ejecuta cuando hacemos la siembra
  up: (queryInterface, Sequelize) => {

    return Promise.all([
      Oferta.create({
        activa:false,
        producto1:1,
        producto2:2,
        user1:"prueba",
        user2:"prueba2",
        
      }),
    ])
  },

  // Esto se ejecuta cuando se deshace la siembra
  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('oferta', null, {});
  }
};
