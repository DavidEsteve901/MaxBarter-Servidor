'use strict';

//Importamos BCRYPT para el cifrado de contraseñas
var bcrypt  = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  
  const ComunidadAutonoma = sequelize.define('ComunidadAutonoma', {

    
    nombre: DataTypes.STRING,

  }, {
    tableName: "ComunidadAutonoma",
    timestamps: false,
    
  });

  ComunidadAutonoma.associate = function(models) {
   

    ComunidadAutonoma.hasMany(models.User,{ as: 'users', foreignKey:'comunidadAutonomaId'})
  };

  return ComunidadAutonoma;
};