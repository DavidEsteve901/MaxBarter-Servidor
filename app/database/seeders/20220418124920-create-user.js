'use strict';

module.exports = {

  // Que se ejecuta cuando hacemos la siembra
  up: (queryInterface, Sequelize) => {

    let users = [
      // { user_name: "david", password: 123, correo: "davidesteve@gmail.com", nombre:"David", apellidos:"Esteve Vicente" },
      { user_name: "david", password: "$2a$10$NqZj.Y9iryOThr/Rt22Ntefj8SHq6InvgAxzJQlOkaj2YvKs9nCqO", correo: "davidestevevicente@gmail.com", nombre:"David", apellidos:"Esteve Vicente", telefono:"94776342",comunidad_autonoma_id:10,img_perfil:"user1-perfil.jpeg",coordenadas:"{\"lat\":39.630698207975136,\"lng\":-0.5994347694151769}"},
      { user_name: "ruben", password: "$2a$10$NqZj.Y9iryOThr/Rt22Ntefj8SHq6InvgAxzJQlOkaj2YvKs9nCqO", correo: "rubenestevevicente@gmail.com", nombre:"Ruben", apellidos:"Esteve Vicente", telefono:"94776342",comunidad_autonoma_id:11,img_perfil:"user2-perfil.jpeg"},
      { user_name: "prueba", password: "$2a$10$NqZj.Y9iryOThr/Rt22Ntefj8SHq6InvgAxzJQlOkaj2YvKs9nCqO", correo: "prueba@gmail.com", nombre:"Prueba", apellidos:"prueba", telefono:"94776342",comunidad_autonoma_id:11,img_perfil:"pruebaPerfil.jpeg"},
      { user_name: "prueba2", password: "$2a$10$NqZj.Y9iryOThr/Rt22Ntefj8SHq6InvgAxzJQlOkaj2YvKs9nCqO", correo: "prueba2@gmail.com", nombre:"Prueba", apellidos:"prueba", telefono:"94776342",comunidad_autonoma_id:11,img_perfil:"prueba2Perfil.jpeg"},
      { user_name: "pedro", password: "$2a$10$NqZj.Y9iryOThr/Rt22Ntefj8SHq6InvgAxzJQlOkaj2YvKs9nCqO", correo: "pedro23@gmail.com", nombre:"Pedro", apellidos:"Sánchez Romero", telefono:"94723342",comunidad_autonoma_id:14,img_perfil:"user3-perfil.jpeg"},
      { user_name: "pablo", password: "$2a$10$NqZj.Y9iryOThr/Rt22Ntefj8SHq6InvgAxzJQlOkaj2YvKs9nCqO", correo: "pablo211@gmail.com", nombre:"Pablo", apellidos:"González Ruiz", telefono:"94754632",comunidad_autonoma_id:5,img_perfil:"user4-perfil.jpeg"},
      { user_name: "alba", password: "$2a$10$NqZj.Y9iryOThr/Rt22Ntefj8SHq6InvgAxzJQlOkaj2YvKs9nCqO", correo: "pablo211@gmail.com", nombre:"Alba", apellidos:"Gutiérrez Santos", telefono:"94151682",comunidad_autonoma_id:5,img_perfil:"user5-perfil.jpeg"},


    ];

    return queryInterface.bulkInsert('users', users, {});

  
  },

  // Esto se ejecuta cuando se deshace la siembra
  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('users', null, {});
  }
};