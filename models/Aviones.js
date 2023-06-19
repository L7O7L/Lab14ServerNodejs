const mongoose = require('mongoose');

const AvionesSchema = new mongoose.Schema({

    codigo: {

        type: String,
        required: true

    },

    tipo: {

        type: String,
        required: true

    }

});

module.exports = mongoose.model("Aviones", AvionesSchema);