'use strict';

//Importamos BCRYPT para el cifrado de contraseñas
var bcrypt  = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  
  const Imagen = sequelize.define('Imagen', {

    url: DataTypes.STRING,

  }, {
    tableName: "Imagen"
    
  });

  Imagen.associate = function(models) {
    // Usuario tiene un domicilio o una direccion
    // User.hasOne(models.Address, { as: "domicilio", foreignKey: "user_id" });

    Imagen.belongsTo(models.Producto)
  };

  return Imagen;
};