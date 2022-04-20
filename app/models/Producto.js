'use strict';

//Importamos BCRYPT para el cifrado de contraseñas
var bcrypt  = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  
  const Producto = sequelize.define('Producto', {

    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING(1300) ,

    match: DataTypes.BOOLEAN,

  }, {
    tableName: "Producto"
    
  });

  Producto.associate = function(models) {

    Producto.hasMany(models.Imagen,{ as: 'imagenes',foreignKey:'producto'})

    Producto.hasMany(models.Oferta,{ as: 'productoPide',foreignKey:'producto1'})

    Producto.hasMany(models.Oferta,{ as: 'productoRecibe', foreignKey:'producto2'})

    Producto.belongsTo(models.User,{ as: 'propietario', foreignKey:'user'})

    Producto.belongsTo(models.Tipo,{ as: 'tipoProducto', foreignKey:'tipo'})

  };

  return Producto;
};