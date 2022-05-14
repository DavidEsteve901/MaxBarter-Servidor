'use strict';

module.exports = {
  // Que se ejecuta cuando hacemos la siembra
  up: (queryInterface, Sequelize) => {

    let tipos = [
      {nombre:"Inmobiliaria"},
      {nombre:"TV,Audio y Foto"},
      {nombre:"Móviles y Telefonía"},
      {nombre:"Infomática y Electrónica"},
      {nombre:"Deporte y Ocio"},
      {nombre:"Bicicletas"},
      {nombre:"Consolas y Videojuegos"},
      {nombre:"Coches"},
      {nombre:"Motos"}, 
      {nombre:"Motor y accesorios"},
      {nombre:"Moda y accesorios"},
      {nombre:"Hogar y Jardín"},
      {nombre:"Electrodomésticos"},
      {nombre:"Cine,Libros y Música"},
      {nombre:"Niños y Bebés"},
      {nombre:"Coleccionismo"},
    ];

    return queryInterface.bulkInsert('Tipo', tipos, {});
  },

  // Esto se ejecuta cuando se deshace la siembra
  down: (queryInterface, Sequelize) => {
    
     
    return queryInterface.bulkDelete('Tipo', null, {});
    
  }
};
