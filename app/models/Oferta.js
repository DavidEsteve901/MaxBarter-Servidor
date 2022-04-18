'use strict';

//Importamos BCRYPT para el cifrado de contraseñas
var bcrypt  = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  
  const Oferta = sequelize.define('Oferta', {

    activa: DataTypes.BOOLEAN,
    rechazada: DataTypes.BOOLEAN

  }, {
    tableName: "Oferta"
    
  });

  Oferta.associate = function(models) {
    // Usuario tiene un domicilio o una direccion
    // User.hasOne(models.Address, { as: "domicilio", foreignKey: "user_id" });

    Oferta.belongsTo(models.Producto,{ as: 'productoPide', foreignKey:'producto1'})
    Oferta.belongsTo(models.Producto,{ as: 'productoRecibe', foreignKey:'producto2'})

    Oferta.belongsTo(models.User,{ as: 'userPide', foreignKey:'user1'})
    Oferta.belongsTo(models.User,{ as: 'userRecibe', foreignKey:'user2'})

  };

  return Oferta;
};