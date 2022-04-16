'use strict';

//Importamos BCRYPT para el cifrado de contraseñas
var bcrypt  = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  
  const Tipo = sequelize.define('Tipo', {

    url: DataTypes.STRING,

  }, {
    tableName: "Tipo"
    
  });

  Tipo.associate = function(models) {
   
    Tipo.hasMany(models.Producto,{ as: 'Productos'})
  };

  return Tipo;
};