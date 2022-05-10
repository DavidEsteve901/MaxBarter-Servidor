'use strict';

const { Producto } = require('../../models');
const { User } = require('../../models')
module.exports = {

  // Que se ejecuta cuando hacemos la siembra
  up: (queryInterface, Sequelize) => {

    return Promise.all([
      
      Producto.create({
        id:1,
        titulo: 'Producto',
        descripcion: 'Descripción del producto',
        match: true,
        user: "prueba",
        tipo: 14
      }),
      Producto.create({
        id:2,
        titulo: 'Producto',
        descripcion: 'Descripción del producto',
        match: true,
        user: "prueba2",
        tipo: 6
      }),
      Producto.create({
        id:3,
        titulo: 'Mercedes-Benz Clase CLC 2010',
        descripcion: 'Un solo propietario, comprado mercedes de terrassa, mantenimiento integral de mercedes, itv pasada este mes, muy buen estado mecánico, coche para años si se cuida. ningún accidente. Mercedes-Benz Clase CLC Coupe',
        match: false,
        user: "david",
        tipo: 8
      }),
      Producto.create({
        id:4,
        titulo: 'Xiaomi Mi 10 5G (256GB)',
        descripcion: 'Un gran dispositivo y se disfruta usarlo. Conservo factura • único dueño y muy bien cuidado • 90 Hz • 8 RAM/256GB • caja, cargador y funda Valencia en mano',
        match: false,
        user: "david",
        tipo: 3
      }),
      Producto.create({
        id:5,
        titulo: 'Máquina multifincional gimnasio Perform ',
        descripcion: "Maquina multinacional de gimnasio 'Number one Perform 420' en perfecto estado.",
        match: false,
        user: "david",
        tipo: 5
      }),
      Producto.create({
        id:6,
        titulo: 'BULLPADEL VERTEX CONTROL',
        descripcion: "Pala de pádel bullpadel VERTEX control 2021, pala de Fede Chingoto, utilizada el 3/4 partidos, planos efecto lija para maximizar los efectos, control 10 y potencia 9. comprada con factura en marzo 2022. Con funda térmica. solo venta. Adidas, varios, vibora, Black crown, head, babolat.",
        match: false,
        user: "ruben",
        tipo: 5
      }),
      Producto.create({
        id:7,
        titulo: 'Colchoneta inchable.',
        descripcion: "Castillo hinchable en perfecto estado, medidas 6x6, motores incluidos.",
        match: false,
        user: "ruben",
        tipo: 5
      }),
      Producto.create({
        id:8,
        titulo: "Bicicleta 26” CUP'S 526.30 21 Marchas",
        descripcion: "Hola vendo Bicicleta Marca CUP'S Modelo 526.30 con Ruedas de 26 Pulgadas y 21 marchas con Doble Suspensión En Buen Estado. Lista para pasear. La entrego en El Prat de Llobregat.",
        match: false,
        user: "pedro",
        tipo: 6
      }),
      Producto.create({
        id:9,
        titulo: "Ps4 slim 500gb",
        descripcion: "Ps4 slim 500gb Mando dualshock blanco original nuevo Cable hdmi Cable de alimentación Se entrega en palma",
        match: false,
        user: "pedro",
        tipo: 7
      }),
    ])
  },

  // Esto se ejecuta cuando se deshace la siembra
  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('producto', null, {});
  }
};
