'use strict';

//Importamos BCRYPT para el cifrado de contraseñas
var bcrypt  = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  
  const Tipo = sequelize.define('Tipo', {

    nombre: DataTypes.STRING,

  }, {
    tableName: "Tipo",
    timestamps: false,
    
  });

  Tipo.associate = function(models) {
   
    Tipo.hasMany(models.Producto,{ as: 'productos', foreignKey:'tipo'})
  };

  return Tipo;
};