var Aviones = require("../models/Aviones");

var getAllAviones = async (req, res) => {

    try {

        const aviones = await Aviones.find().populate('base', 'nombre');
        res.json(aviones);
        
    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');

    }

}

var createAviones = async (req, res) => {
    try {
        const aviones = new Aviones(req.body);

        await aviones.save();
        res.send(aviones);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

var updateAviones = async (req, res) => {
    try {

        const {_id, codigo, tipo } = new Aviones(req.body);
        let aviones = await Aviones.findById(req.params.id);

        if(!aviones){
            res.status(404).json({ msg: 'No existe el avion'});
        }

        aviones._id = _id;
        aviones.codigo = codigo;
        aviones.tipo = tipo;

        console.log(aviones)

        aviones = await Aviones.findOneAndUpdate({ _id: req.params.id }, aviones, { new: true } );
        res.json(aviones);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

var getOneAviones = async (req, res) => {

    try {

        let aviones = await Aviones.findById(req.params.id).populate('base', 'nombre');;

        if(!aviones){
            res.status(404).json({ msg: 'No existe el avion'});
        }

        res.json(aviones); 
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

var deleteAviones = async (req, res) => {
    try {

        let aviones = await Aviones.findById(req.params.id);

        if(!aviones){
            res.status(404).json({ msg: 'No existe el vuelo'});
        }

        aviones = await Aviones.findOneAndRemove(req.params.id);

        res.json({ msg: 'El avion: ' + aviones.codigo + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

module.exports = { getAllAviones, createAviones, updateAviones, deleteAviones, getOneAviones };