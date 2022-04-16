'use strict';

//Importamos BCRYPT para el cifrado de contraseñas
var bcrypt  = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  
  const User = sequelize.define('User', {
    userName:{
      type: DataTypes.STRING,
      primaryKey: true
    },

    password: DataTypes.STRING,
    correo: DataTypes.STRING,

    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    
    imgPerfil: DataTypes.STRING,

    roles: DataTypes.JSON,
    coordenadas: DataTypes.JSON,

  }, {
    tableName: "users"
    
  });

  User.associate = function(models) {
    // Usuario tiene un domicilio o una direccion
    // User.hasOne(models.Address, { as: "domicilio", foreignKey: "user_id" });
    User.hasMany(models.Producto,{ as: 'Productos'})

    User.belongsTo(models.ComunidadAutonoma)

    User.hasMany(models.Oferta,{ as: 'userRecibe',foreignKey:'userRecibe'})

    User.hasMany(models.Oferta,{ as: 'userPide',foreignKey:'userPide'})
    
  };

  //MÉTODOS para el Modelo de USER

  //Cifrar contraseñas
  User.encryptPassword =  async (password) => {
    //Para el cifrado
    const salt = await bcrypt.genSalt(10);

    return await bcrypt.hash(password,salt)
  }

  //Comparar contraseñas
  User.comparePassword = async (password,recivedPassword) => {
    return await bcrypt.compare(password,recivedPassword)
  }

  return User;
};