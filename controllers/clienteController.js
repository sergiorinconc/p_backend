const Cliente = require('../models/Cliente');

// funcion para buscar clientes en una base de datos 

exports.buscarClientes  = async(req, res)=>{

    try {
        const cliente = await Cliente.find();
        res.json(cliente); // nota res.json se puede usar tambien como res.send
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar los0 clientes');

    }
}


// funcion agragar clientes 
exports.agregarClientes = async(req, res)=>{

    try {
        let clientes;
        clientes = new Cliente(req.body)
        await clientes.save();
        res.send(clientes);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar un cliente');
    }
}

// funcion para mostrar un solo cliente 

exports.buscarCliente = async(req, res) =>{ 

    try {
        
        let cliente = await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(404).json({msg: "cliente no encontrado con ese id"})
            return
        }
        res.send(cliente);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar un cliente');   
    }
}

// para eliemnar un cliente

exports.eliminarCliente =async(req, res) =>{
    try {
        let cliente= await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(404).json({msg:"El cliente no existe"})
            return
        }
        await Cliente.findOneAndDelete({_id: req.params.id});
        res.json({msg: "El cliente ha sido eliminado "});
        return

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al eliminar un cliente');
    }
}

// esta funcion es para actualizar un cliente 

exports.actualizarCliente = async(req, res) =>{
    try {
    
        const{nombres, apellidos, documento, correo, telefono, direccion} = req.body // me trae los datos del cliente 
        let cliente = await Cliente.findById(req.params.id)
        
        if(!cliente){
            res.status(404).json({msg: "el cliente no existe"})
        
        }else{ 
            cliente.nombres = nombres;
            cliente.apellidos = apellidos;
            cliente.documento = documento;
            cliente.correo = correo;  
            cliente.telefono = telefono;
            cliente.direccion = direccion; 

            cliente = await Cliente.findOneAndUpdate({_id: req.params.id}, cliente,{new:true});
            res.json(cliente);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al actualizar un cliente');
        return
    }
}