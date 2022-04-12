import app from './app';
const { sequelize } = require('./models/index'); 
// import  { sequelize }  from './models/index';

// Setting

const PORT = process.env.PORT || 3000;

// Arrancamos el servidor
app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`);

    // sequelize.authenticate().then(() => {
    //     console.log("Se ha establecido la conexión");
    // })

    sequelize.sync({ force: false }).then(() => {
        console.log("Se ha establecido la conexión");
    })
});






