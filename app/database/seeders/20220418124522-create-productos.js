'use strict';

const { Producto } = require('../../models');
const { User } = require('../../models')
module.exports = {

  // Que se ejecuta cuando hacemos la siembra
  up: (queryInterface, Sequelize) => {

    return Promise.all([
      Producto.create({
        titulo: 'Caja',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat, odit ipsum quae aliquam eligendi facilis illo molestias ex expedita quasi quod quam illum ipsa repellendus eaque hic dignissimos ab. Aliquam aut veritatis, nulla quidem asperiores sed natus ad et laboriosam voluptas repudiandae aspernatur perferendis cupiditate maxime totam maiores repellat possimus recusandae. Voluptates inventore nobis voluptate voluptatem, beatae excepturi tenetur. Sed cum obcaecati corporis distinctio iure nulla ipsam consectetur, perspiciatis amet sequi deserunt fugit a et maxime corrupti quibusdam, atque molestias earum ipsa consequatur beatae odio! Sapiente fuga eos veniam!',
        match: false,
        user: "david",
      }),
      Producto.create({
        titulo: 'Caja',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat, odit ipsum quae aliquam eligendi facilis illo molestias ex expedita quasi quod quam illum ipsa repellendus eaque hic dignissimos ab. Aliquam aut veritatis, nulla quidem asperiores sed natus ad et laboriosam voluptas repudiandae aspernatur perferendis cupiditate maxime totam maiores repellat possimus recusandae. Voluptates inventore nobis voluptate voluptatem, beatae excepturi tenetur. Sed cum obcaecati corporis distinctio iure nulla ipsam consectetur, perspiciatis amet sequi deserunt fugit a et maxime corrupti quibusdam, atque molestias earum ipsa consequatur beatae odio! Sapiente fuga eos veniam!',
        match: false,
        user: "ruben",
      }),
      Producto.create({
        titulo: 'Caja',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat, odit ipsum quae aliquam eligendi facilis illo molestias ex expedita quasi quod quam illum ipsa repellendus eaque hic dignissimos ab. Aliquam aut veritatis, nulla quidem asperiores sed natus ad et laboriosam voluptas repudiandae aspernatur perferendis cupiditate maxime totam maiores repellat possimus recusandae. Voluptates inventore nobis voluptate voluptatem, beatae excepturi tenetur. Sed cum obcaecati corporis distinctio iure nulla ipsam consectetur, perspiciatis amet sequi deserunt fugit a et maxime corrupti quibusdam, atque molestias earum ipsa consequatur beatae odio! Sapiente fuga eos veniam!',
        match: false,
        user: "ruben",
      }),
      Producto.create({
        titulo: 'Caja',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat, odit ipsum quae aliquam eligendi facilis illo molestias ex expedita quasi quod quam illum ipsa repellendus eaque hic dignissimos ab. Aliquam aut veritatis, nulla quidem asperiores sed natus ad et laboriosam voluptas repudiandae aspernatur perferendis cupiditate maxime totam maiores repellat possimus recusandae. Voluptates inventore nobis voluptate voluptatem, beatae excepturi tenetur. Sed cum obcaecati corporis distinctio iure nulla ipsam consectetur, perspiciatis amet sequi deserunt fugit a et maxime corrupti quibusdam, atque molestias earum ipsa consequatur beatae odio! Sapiente fuga eos veniam!',
        match: false,
        user: "ruben",
      }),
      Producto.create({
        titulo: 'Caja',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat, odit ipsum quae aliquam eligendi facilis illo molestias ex expedita quasi quod quam illum ipsa repellendus eaque hic dignissimos ab. Aliquam aut veritatis, nulla quidem asperiores sed natus ad et laboriosam voluptas repudiandae aspernatur perferendis cupiditate maxime totam maiores repellat possimus recusandae. Voluptates inventore nobis voluptate voluptatem, beatae excepturi tenetur. Sed cum obcaecati corporis distinctio iure nulla ipsam consectetur, perspiciatis amet sequi deserunt fugit a et maxime corrupti quibusdam, atque molestias earum ipsa consequatur beatae odio! Sapiente fuga eos veniam!',
        match: false,
        user: "ruben",
      }),
      Producto.create({
        titulo: 'Caja',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat, odit ipsum quae aliquam eligendi facilis illo molestias ex expedita quasi quod quam illum ipsa repellendus eaque hic dignissimos ab. Aliquam aut veritatis, nulla quidem asperiores sed natus ad et laboriosam voluptas repudiandae aspernatur perferendis cupiditate maxime totam maiores repellat possimus recusandae. Voluptates inventore nobis voluptate voluptatem, beatae excepturi tenetur. Sed cum obcaecati corporis distinctio iure nulla ipsam consectetur, perspiciatis amet sequi deserunt fugit a et maxime corrupti quibusdam, atque molestias earum ipsa consequatur beatae odio! Sapiente fuga eos veniam!',
        match: false,
        user: "ruben",
      }),
      Producto.create({
        titulo: 'Caja',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat, odit ipsum quae aliquam eligendi facilis illo molestias ex expedita quasi quod quam illum ipsa repellendus eaque hic dignissimos ab. Aliquam aut veritatis, nulla quidem asperiores sed natus ad et laboriosam voluptas repudiandae aspernatur perferendis cupiditate maxime totam maiores repellat possimus recusandae. Voluptates inventore nobis voluptate voluptatem, beatae excepturi tenetur. Sed cum obcaecati corporis distinctio iure nulla ipsam consectetur, perspiciatis amet sequi deserunt fugit a et maxime corrupti quibusdam, atque molestias earum ipsa consequatur beatae odio! Sapiente fuga eos veniam!',
        match: false,
        user: "ruben",
      }),
      Producto.create({
        titulo: 'Caja',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat, odit ipsum quae aliquam eligendi facilis illo molestias ex expedita quasi quod quam illum ipsa repellendus eaque hic dignissimos ab. Aliquam aut veritatis, nulla quidem asperiores sed natus ad et laboriosam voluptas repudiandae aspernatur perferendis cupiditate maxime totam maiores repellat possimus recusandae. Voluptates inventore nobis voluptate voluptatem, beatae excepturi tenetur. Sed cum obcaecati corporis distinctio iure nulla ipsam consectetur, perspiciatis amet sequi deserunt fugit a et maxime corrupti quibusdam, atque molestias earum ipsa consequatur beatae odio! Sapiente fuga eos veniam!',
        match: false,
        user: "ruben",
      }),
      Producto.create({
        titulo: 'Caja',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat, odit ipsum quae aliquam eligendi facilis illo molestias ex expedita quasi quod quam illum ipsa repellendus eaque hic dignissimos ab. Aliquam aut veritatis, nulla quidem asperiores sed natus ad et laboriosam voluptas repudiandae aspernatur perferendis cupiditate maxime totam maiores repellat possimus recusandae. Voluptates inventore nobis voluptate voluptatem, beatae excepturi tenetur. Sed cum obcaecati corporis distinctio iure nulla ipsam consectetur, perspiciatis amet sequi deserunt fugit a et maxime corrupti quibusdam, atque molestias earum ipsa consequatur beatae odio! Sapiente fuga eos veniam!',
        match: false,
        user: "ruben",
      }),
      Producto.create({
        titulo: 'Caja',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat, odit ipsum quae aliquam eligendi facilis illo molestias ex expedita quasi quod quam illum ipsa repellendus eaque hic dignissimos ab. Aliquam aut veritatis, nulla quidem asperiores sed natus ad et laboriosam voluptas repudiandae aspernatur perferendis cupiditate maxime totam maiores repellat possimus recusandae. Voluptates inventore nobis voluptate voluptatem, beatae excepturi tenetur. Sed cum obcaecati corporis distinctio iure nulla ipsam consectetur, perspiciatis amet sequi deserunt fugit a et maxime corrupti quibusdam, atque molestias earum ipsa consequatur beatae odio! Sapiente fuga eos veniam!',
        match: false,
        user: "ruben",
      }),
      Producto.create({
        titulo: 'Caja',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat, odit ipsum quae aliquam eligendi facilis illo molestias ex expedita quasi quod quam illum ipsa repellendus eaque hic dignissimos ab. Aliquam aut veritatis, nulla quidem asperiores sed natus ad et laboriosam voluptas repudiandae aspernatur perferendis cupiditate maxime totam maiores repellat possimus recusandae. Voluptates inventore nobis voluptate voluptatem, beatae excepturi tenetur. Sed cum obcaecati corporis distinctio iure nulla ipsam consectetur, perspiciatis amet sequi deserunt fugit a et maxime corrupti quibusdam, atque molestias earum ipsa consequatur beatae odio! Sapiente fuga eos veniam!',
        match: false,
        user: "ruben",
      }),
      Producto.create({
        titulo: 'Caja',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat, odit ipsum quae aliquam eligendi facilis illo molestias ex expedita quasi quod quam illum ipsa repellendus eaque hic dignissimos ab. Aliquam aut veritatis, nulla quidem asperiores sed natus ad et laboriosam voluptas repudiandae aspernatur perferendis cupiditate maxime totam maiores repellat possimus recusandae. Voluptates inventore nobis voluptate voluptatem, beatae excepturi tenetur. Sed cum obcaecati corporis distinctio iure nulla ipsam consectetur, perspiciatis amet sequi deserunt fugit a et maxime corrupti quibusdam, atque molestias earum ipsa consequatur beatae odio! Sapiente fuga eos veniam!',
        match: false,
        user: "ruben",
      }),
      Producto.create({
        titulo: 'Caja',
        descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fugiat, odit ipsum quae aliquam eligendi facilis illo molestias ex expedita quasi quod quam illum ipsa repellendus eaque hic dignissimos ab. Aliquam aut veritatis, nulla quidem asperiores sed natus ad et laboriosam voluptas repudiandae aspernatur perferendis cupiditate maxime totam maiores repellat possimus recusandae. Voluptates inventore nobis voluptate voluptatem, beatae excepturi tenetur. Sed cum obcaecati corporis distinctio iure nulla ipsam consectetur, perspiciatis amet sequi deserunt fugit a et maxime corrupti quibusdam, atque molestias earum ipsa consequatur beatae odio! Sapiente fuga eos veniam!',
        match: false,
        user: "ruben",
      }),
    ])
  },

  // Esto se ejecuta cuando se deshace la siembra
  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('producto', null, {});
  }
};
