const mongoose = require('mongoose');

const PilotoSchema = new mongoose.Schema({

    codigo: {

        type: String,
        required: true

    },

    nombre: {

        type: String,
        required: true

    },

    hora_vuelo: {

        type: String,
        required: true

    }

});

module.exports = mongoose.model("Piloto", PilotoSchema);