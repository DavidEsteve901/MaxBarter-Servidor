'use strict';

module.exports = {

  // Que se ejecuta cuando hacemos la siembra
  up: (queryInterface, Sequelize) => {

    let users = [
      // { user_name: "david", password: 123, correo: "davidesteve@gmail.com", nombre:"David", apellidos:"Esteve Vicente" },
      { user_name: "david", password: "$2a$10$NqZj.Y9iryOThr/Rt22Ntefj8SHq6InvgAxzJQlOkaj2YvKs9nCqO", correo: "davidestevevicente@gmail.com", nombre:"David", apellidos:"Esteve Vicente", telefono:"94776342",comunidad_autonoma_id:10,img_perfil:"Foto-Perfil.jpg"},
      { user_name: "ruben", password: "$2a$10$NqZj.Y9iryOThr/Rt22Ntefj8SHq6InvgAxzJQlOkaj2YvKs9nCqO", correo: "rubenestevevicente@gmail.com", nombre:"Ruben", apellidos:"Esteve Vicente", telefono:"94776342",comunidad_autonoma_id:11,img_perfil:"Foto-Perfil2.jpg"},
    ];

    return queryInterface.bulkInsert('users', users, {});

  
  },

  // Esto se ejecuta cuando se deshace la siembra
  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', null, {});
  }
};