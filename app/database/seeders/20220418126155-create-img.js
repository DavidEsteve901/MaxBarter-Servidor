'use strict';

module.exports = {

  // Que se ejecuta cuando hacemos la siembra
  up: (queryInterface, Sequelize) => {

    let imagenes = [
      {url:"pruebaProducto.jpeg",producto:"1"},
      {url:"prueba2Producto.jpeg",producto:"2"},

      {url:"user1-producto1-1.jpeg",producto:"3"},
      {url:"user1-producto1-2.jpeg",producto:"3"},
      {url:"user1-producto1-3.jpeg",producto:"3"},

      {url:"user1-producto2-1.jpeg",producto:"4"},
      {url:"user1-producto2-2.jpeg",producto:"4"},
      {url:"user1-producto2-3.jpeg",producto:"4"},

      {url:"user1-producto3-1.jpeg",producto:"5"},
      {url:"user1-producto3-2.jpeg",producto:"5"},
      {url:"user1-producto3-3.jpeg",producto:"5"},
      {url:"user1-producto3-4.jpeg",producto:"5"},

      {url:"user2-producto1-1.jpeg",producto:"6"},
      {url:"user2-producto1-2.jpeg",producto:"6"},
      {url:"user2-producto1-3.jpeg",producto:"6"},

      {url:"user2-producto2-1.jpeg",producto:"7"},
      {url:"user2-producto2-2.jpeg",producto:"7"},
      {url:"user2-producto2-3.jpeg",producto:"7"},

      {url:"user3-producto1-1.jpeg",producto:"8"},
      {url:"user3-producto1-2.jpeg",producto:"8"},
      {url:"user3-producto1-3.jpeg",producto:"8"},
      {url:"user3-producto1-4.jpeg",producto:"8"},

      {url:"user3-producto2-1.jpeg",producto:"9"},
      {url:"user3-producto2-2.jpeg",producto:"9"},
      {url:"user3-producto2-3.jpeg",producto:"9"},
    







    ];

    return queryInterface.bulkInsert('imagen', imagenes, {});
  },

  // Esto se ejecuta cuando se deshace la siembra
  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('imagen', null, {});
  }
};
