'use strict';

module.exports = {

  // Que se ejecuta cuando hacemos la siembra
  up: (queryInterface, Sequelize) => {

    let users = [
      // { user_name: "david", password: 123, correo: "davidesteve@gmail.com", nombre:"David", apellidos:"Esteve Vicente" },
      { user_name: "david", password: "$2a$10$NqZj.Y9iryOThr/Rt22Ntefj8SHq6InvgAxzJQlOkaj2YvKs9nCqO", correo: "davidestevevicente@gmail.com", nombre:"David", apellidos:"Esteve Vicente" },
    ];

    return queryInterface.bulkInsert('users', users, {});
  },

  // Esto se ejecuta cuando se deshace la siembra
  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', null, {});
  }
};
