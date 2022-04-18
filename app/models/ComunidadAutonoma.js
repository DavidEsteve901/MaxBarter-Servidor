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
    // Usuario tiene un domicilio o una direccion
    // User.hasOne(models.Address, { as: "domicilio", foreignKey: "user_id" });

    ComunidadAutonoma.hasMany(models.User,{ as: 'users', foreignKey:'comunidadAutonomaId'})
  };

  return ComunidadAutonoma;
};