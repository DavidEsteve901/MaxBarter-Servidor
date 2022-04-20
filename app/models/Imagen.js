'use strict';

//Importamos BCRYPT para el cifrado de contraseñas
var bcrypt  = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  
  const Imagen = sequelize.define('Imagen', {

    url: DataTypes.STRING,

  }, {
    tableName: "Imagen",
    timestamps: false,
    
  });

  Imagen.associate = function(models) {
    

  };

  return Imagen;
};