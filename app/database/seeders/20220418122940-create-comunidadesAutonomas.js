'use strict';

module.exports = {

  // Que se ejecuta cuando hacemos la siembra
  up: (queryInterface, Sequelize) => {

    let comunidadesAutonomas = [
      {nombre:"Andalucía"},
      {nombre:"Aragón"},
      {nombre:"Principado de Asturias"},
      {nombre:"Illes Balears"},
      {nombre:"Canarias"},
      {nombre:"Cantabria"},
      {nombre:"Castilla y León"},
      {nombre:"Castilla-La Mancha"},
      {nombre:"Cataluña"},
      {nombre:"Comunitat Valenciana"},
      {nombre:"Extremadura"},
      {nombre:"Galicia"},
      {nombre:"Castilla-La Mancha"},
      {nombre:"Comunidad de Madrid"},
      {nombre:"Región de Murcia"},
      {nombre:"Comunidad Foral de Navarra"},
      {nombre:"País Vasco"},
      {nombre:"La Rioja"},
      {nombre:"Ciudad Autónoma de Ceuta"},
      {nombre:"Ciudad Autónoma de Melilla"},

    ];

    return queryInterface.bulkInsert('ComunidadAutonoma', comunidadesAutonomas, {});
  },

  // Esto se ejecuta cuando se deshace la siembra
  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('ComunidadAutonoma', null, {});
  }
};
