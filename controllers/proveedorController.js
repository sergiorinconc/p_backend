const Proveedor = require('../models/Proveedor');

// funcion para buscar clientes en una base de datos 

exports.buscarProveedores  = async(req, res)=>{

    try {
        const proveedor = await Proveedor.find();
        res.json(proveedor); // nota res.json se puede usar tambien como res.send
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar los proveedores');

    }
}


// funcion agragar clientes 
exports.agregarProveedor = async(req, res)=>{

    try {
        let proveedor;
        proveedor = new Proveedor(req.body)
        await proveedor.save();
        res.send(proveedor);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar un proveedor');
    }
}

// funcion para mostrar un solo cliente 

exports.buscarProveedor = async(req, res) =>{ 

    try {
        
        let proveedor = await Proveedor.findById(req.params.id);
        if(!proveedor){
            res.status(404).json({msg: "provedor no encontrado con ese id"})
            return
        }
        res.send(proveedor);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar un proveedor');   
    }
}

// para eliemnar un cliente

exports.eliminarProveedor =async(req, res) =>{
    try {
        let proveedor= await Proveedor.findById(req.params.id);
        if(!proveedor){
            res.status(404).json({msg:"El proveedor no existe"})
            return
        }
        await Proveedor.findOneAndDelete({_id: req.params.id});
        res.json({msg: "El proveedor ha sido eliminado "});
        return

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al eliminar un proveedor');
    }
}

// esta funcion es para actualizar un cliente 

exports.actualizarProveedor = async(req, res) =>{
    try {
    
        const{nombre,  direccion, telefono, correo, productos, sitioWeb, horarioAtencion} = req.body // me trae los datos del cliente 
        let proveedor = await Proveedor.findById(req.params.id)
        
        if(!proveedor){
            res.status(404).json({msg: "el proveedor no existe"})
        
        }else{ 
            proveedor.nombre = nombre;
            proveedor.direccion = direccion;
            proveedor.telefono = telefono;
            proveedor.correo = correo;  
            proveedor.productos = productos; 
            proveedor.sitioWeb = sitioWeb;
            proveedor.horarioAtencion = horarioAtencion;
            proveedor = await Proveedor.findOneAndUpdate({_id: req.params.id}, proveedor,{new:true});
            res.json(proveedor);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al actualizar un proveedor');
        return
    }
}