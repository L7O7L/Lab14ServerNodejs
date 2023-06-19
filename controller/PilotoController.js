var Piloto = require("../models/Piloto");

var getAllPilotos = async (req, res) => {

    try {

        const pilotos = await Piloto.find();
        res.json(pilotos);
        
    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');

    }

}

var createPiloto = async (req, res) => {
    try {
        const piloto = new Piloto(req.body);

        await piloto.save();
        res.send(piloto);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

var updatePiloto = async (req, res) => {
    try {

        const {_id, codigo, nombre, hora_vuelo } = new Piloto(req.body);
        let pilotos = await Piloto.findById(req.params.id);

        if(!pilotos){
            res.status(404).json({ msg: 'No existe el piloto'});
        }

        pilotos._id = _id;
        pilotos.codigo = codigo;
        pilotos.nombre = nombre;
        pilotos.hora_vuelo = hora_vuelo;

        console.log(pilotos)

        pilotos = await Piloto.findOneAndUpdate({ _id: req.params.id }, pilotos, { new: true } );
        res.json(pilotos);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

var getOnePiloto = async (req, res) => {

    try {

        let pilotos = await Piloto.findById(req.params.id);

        if(!pilotos){
            res.status(404).json({ msg: 'No existe el piloto'});
        }

        res.json(pilotos); 
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

var deletePiloto = async (req, res) => {
    try {

        let pilotos = await Piloto.findById(req.params.id);

        if(!pilotos){
            res.status(404).json({ msg: 'No existe el piloto'});
        }

        pilotos = await Piloto.findOneAndRemove(req.params.id);

        res.json({ msg: 'El piloto: ' + pilotos.codigo + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

module.exports = { getAllPilotos, createPiloto, updatePiloto, deletePiloto, getOnePiloto };