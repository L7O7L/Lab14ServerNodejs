var Vuelo = require("../models/Vuelos");

var getAllVuelos = async (req, res) => {

    try {

        const vuelos = await Vuelo.find().populate('aviones', 'codigo')
                                         .populate('pilotos', 'codigo');
        res.json(vuelos);
        
    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');

    }

}

var createVuelos = async (req, res) => {
    try {
        const vuelos = new Vuelo(req.body);

        await vuelos.save();
        res.send(vuelos);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

var updateVuelos = async (req, res) => {
    try {

        const {_id, num_vuelo, origen, destino, hora, fecha } = new Vuelo(req.body);
        let vuelos = await Vuelo.findById(req.params.id);

        if(!vuelos){
            res.status(404).json({ msg: 'No existe el vuelo'});
        }

        vuelos._id = _id;
        vuelos.num_vuelo = num_vuelo;
        vuelos.origen = origen;
        vuelos.destino = destino;
        vuelos.hora = hora;
        vuelos.fecha = fecha;

        console.log(vuelos)

        vuelos = await Vuelo.findOneAndUpdate({ _id: req.params.id }, vuelos, { new: true } );
        res.json(vuelos);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

var getOneVuelos = async (req, res) => {

    try {

        let vuelos = await Vuelo.findById(req.params.id).populate('aviones', 'codigo')
                                                        .populate('pilotos', 'codigo');;

        if(!vuelos){
            res.status(404).json({ msg: 'No existe el vuelo'});
        }

        res.json(vuelos); 
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

var deleteVuelos = async (req, res) => {
    try {

        let vuelos = await Vuelo.findById(req.params.id);

        if(!vuelos){
            res.status(404).json({ msg: 'No existe el vuelo'});
        }

        vuelos = await Vuelo.findOneAndRemove(req.params.id);

        res.json({ msg: 'El vuelo: ' + vuelos.codigo + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

module.exports = { getAllVuelos, createVuelos, updateVuelos, deleteVuelos, getOneVuelos };