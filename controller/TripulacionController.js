var Tripulacion = require("../models/Tripulacion");

var getAllTripulacion = async (req, res) => {

    try {

        const tripulacion = await Tripulacion.find().populate('tripulacion', 'num_vuelo')
                                                    .populate('base', 'nombre');

        res.json(tripulacion);
        
    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');

    }

}

var createTripulacion = async (req, res) => {
    try {
        const tripulacion = new Tripulacion(req.body);

        await tripulacion.save();
        res.send(tripulacion);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

var updateTripulacion = async (req, res) => {
    try {

        const {_id, codigo, nombre } = new Tripulacion(req.body);
        let tripulacion = await Tripulacion.findById(req.params.id);

        if(!tripulacion){
            res.status(404).json({ msg: 'No existe en la Tripulacion'});
        }

        tripulacion._id = _id;
        tripulacion.codigo = codigo;
        tripulacion.nombre = nombre;

        console.log(tripulacion)

        tripulacion = await Tripulacion.findOneAndUpdate({ _id: req.params.id }, tripulacion, { new: true } );
        res.json(tripulacion);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

var getOneTripulacion = async (req, res) => {

    try {

        let tripulacion = await Tripulacion.findById(req.params.id).populate('tripulacion', 'num_vuelo')
                                                                   .populate('base', 'nombre');

        if(!tripulacion){
            res.status(404).json({ msg: 'No existe en la tripulacion'});
        }

        res.json(tripulacion); 
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

var deleteTripulacion = async (req, res) => {
    try {

        let tripulacion = await Tripulacion.findById(req.params.id);

        if(!tripulacion){
            res.status(404).json({ msg: 'No existe el piloto'});
        }

        tripulacion = await Tripulacion.findOneAndRemove(req.params.id);

        res.json({ msg: 'De la tripulacion: ' + tripulacion.codigo + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

module.exports = { getAllTripulacion, createTripulacion, updateTripulacion, deleteTripulacion, getOneTripulacion };