var Base = require("../models/Base");

var getAllBase = async (req, res) => {

    try {

        const bases = await Base.find().populate('aviones', 'codigo')
                                       .populate('tripulacion', 'codigo');
        res.json(bases);
        
    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');

    }

}

var createBase = async (req, res) => {
    try {
        const bases = new Base(req.body);

        await bases.save();
        res.send(bases);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

var updateBase = async (req, res) => {
    try {

        const {_id, nombre } = new Base(req.body);
        let bases = await Base.findById(req.params.id);

        if(!bases){
            res.status(404).json({ msg: 'No existe la base'});
        }

        bases._id = _id;
        bases.nombre = codigo;

        console.log(bases)

        bases = await Base.findOneAndUpdate({ _id: req.params.id }, bases, { new: true } );
        res.json(bases);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

var getOneBase = async (req, res) => {

    try {

        let bases = await Base.findById(req.params.id).populate('aviones', 'codigo')
                                                      .populate('tripulacion', 'codigo');;

        if(!bases){
            res.status(404).json({ msg: 'No existe la base'});
        }

        res.json(bases); 
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

var deleteBase = async (req, res) => {
    try {

        let bases = await Base.findById(req.params.id);

        if(!bases){
            res.status(404).json({ msg: 'No existe el vuelo'});
        }

        bases = await Base.findOneAndRemove(req.params.id);

        res.json({ msg: 'La base: ' + bases.codigo + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

module.exports = { getAllBase, createBase, updateBase, deleteBase, getOneBase };