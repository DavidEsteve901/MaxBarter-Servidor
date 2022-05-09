'use strict';

module.exports = {

  // Que se ejecuta cuando hacemos la siembra
  up: (queryInterface, Sequelize) => {

    let imagenes = [
      {url:"pruebaProducto.jpeg",producto:"2"},
      {url:"prueba2Producto.jpeg",producto:"3"}
    ];

    return queryInterface.bulkInsert('imagen', imagenes, {});
  },

  // Esto se ejecuta cuando se deshace la siembra
  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('imagen', null, {});
  }
};
