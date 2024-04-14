const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

// estas son las rutas de niestro crud 
router.post('/', proveedorController.agregarProveedor);
router.get('/', proveedorController.buscarProveedores);
router.get('/:id', proveedorController.buscarProveedor);
router.delete('/:id', proveedorController.eliminarProveedor);
router.put('/:id', proveedorController.actualizarProveedor);

// estasn son las rutas del proveedor 

module.exports = router; 