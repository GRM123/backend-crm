const Sequelize = require('Sequelize');
const db = require('../config/database');

var Contacto = db.define('contactos', {
    contac_correo: {type: Sequelize.STRING, primaryKey: true},
    contac_nombre:  { type: Sequelize.STRING, allowNull: false},
    contac_apellido:  { type: Sequelize.STRING, allowNull: false},
    contac_telefono:  { type: Sequelize.STRING, allowNull: false},
    contac_departamento: {type: Sequelize.STRING, allowNull: false}
},
{ 
	timestamps: false  //Para evitar que se creen los columnas de update y creacion
});

module.exports = Contacto;