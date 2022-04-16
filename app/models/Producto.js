'use strict';

//Importamos BCRYPT para el cifrado de contraseñas
var bcrypt  = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  
  const Producto = sequelize.define('Producto', {

    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,

    match: DataTypes.BOOLEAN,

  }, {
    tableName: "Producto"
    
  });

  Producto.associate = function(models) {
    // Usuario tiene un domicilio o una direccion
    // User.hasOne(models.Address, { as: "domicilio", foreignKey: "user_id" });

    Producto.belongsTo(models.User)

    Producto.belongsTo(models.Tipo)

    Producto.hasMany(models.Imagen,{ as: 'imagenes',foreignKey:'imagenId'})

    Producto.hasMany(models.Oferta,{ as: 'productoPide',foreignKey:'productoPide'})

    Producto.hasMany(models.Oferta,{ as: 'productoRecibe',foreignKey:'productoRecibe'})
  };

  return Producto;
};