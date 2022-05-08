'use strict';

module.exports = {

  // Que se ejecuta cuando hacemos la siembra
  up: (queryInterface, Sequelize) => {

    let imagenes = [
      {url:"Foto-Perfil.jpg"},
      {url:"pruebaProducto.jpg",producto:"2"}
    ];

    return queryInterface.bulkInsert('imagen', imagenes, {});
  },

  // Esto se ejecuta cuando se deshace la siembra
  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('imagen', null, {});
  }
};
