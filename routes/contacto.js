const { json } = require('body-parser');
var express = require('express');
var app = express();

var Contacto = require('../models/contacto');

app.get('/', (req, res) =>{

    Contacto.findAll().then( contactos =>{
        if(contactos){
            res.status(200).json({
                ok: 'true',
                contactos: contactos
            })
        }
        else{
            return res.status(500).json({
                ok: 'false',
                mensaje: "Error al recueprar los datos "
            })
        }
    })
});

// ==========================================
//  Obtener proveedor por ID
// ==========================================
app.get('/:id', (req, res)=>{

    var id = req.params.id;
    Contacto.findOne({
        attributes: ['nombre', 'correo'],
        where:{
            id_contacto: id
        }
    })
    .then(contacto => {
        if(contacto){
            res.status(200).json({
                ok: 'true',
                contacto: contacto
            });
        }
        else{
            return res.status(400).json({
                ok: 'false',
                mensaje: 'No exite ese contacto'
            });
        }
    })
    .catch(err =>{
        return re.status(500).json({
            ok: 'false',
            mensaje: 'Error al buscar el contacto'
        });
    })
});

app.post('/',  (req, res, next)=>{
    var body = req.body;
    
    Contacto.create({
        contac_correo: body.correo,
        contac_nombre: body.nombre,
        contac_apellido: body.apellido,
        contac_telefono: body.telefono,
        contac_departamento: body.departamento
    })
    .then(contacto =>{
        res.status(200).json({
            ok:'true',
            mensaje: 'contacto creado'
        })
    })
    .catch(err =>{
        return res.status(400).json({
            ok: 'false',
            mensaje: 'Error al crear el contacto',
            errors: err
        })
    })

});//Cierre del post


module.exports = app;