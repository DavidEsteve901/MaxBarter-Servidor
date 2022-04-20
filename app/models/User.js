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
    telefono: DataTypes.STRING,

    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    
    imgPerfil: DataTypes.STRING,

    roles: DataTypes.JSON,
    coordenadas: DataTypes.JSON,

  }, {
    tableName: "users"
    
  });

  User.associate = function(models) {
    
    User.hasMany(models.Producto,{ as: 'productos',foreignKey:'user'})

    User.hasMany(models.Oferta,{ as: 'userRecibe',foreignKey:'user1'})

    User.hasMany(models.Oferta,{ as: 'userPide',foreignKey:'user2'})

    User.belongsTo(models.ComunidadAutonoma,{ as: 'comunidadAutonoma', foreignKey:'comunidadAutonomaId'})
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