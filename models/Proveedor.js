const mongoose = require('mongoose');

const proveedorSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    productos: [{
        type: String,
        required: true
    }],
    sitioWeb: {
        type: String
    },
    horarioAtencion: {
        type: String
    },
    }, {versionkey:false});

module.exports = mongoose.model('Proveedor', proveedorSchema);
