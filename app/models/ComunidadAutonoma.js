'use strict';

//Importamos BCRYPT para el cifrado de contraseñas
var bcrypt  = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  
  const ComunidadAutonoma = sequelize.define('ComunidadAutonoma', {

    url: DataTypes.STRING,

  }, {
    tableName: "ComunidadAutonoma"
    
  });

  ComunidadAutonoma.associate = function(models) {
    // Usuario tiene un domicilio o una direccion
    // User.hasOne(models.Address, { as: "domicilio", foreignKey: "user_id" });

    ComunidadAutonoma.hasMany(models.User,{ as: 'Users'})
  };

  return ComunidadAutonoma;
};