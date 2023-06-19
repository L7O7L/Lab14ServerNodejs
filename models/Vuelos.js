const mongoose = require('mongoose');

const VuelosSchema = new mongoose.Schema({

    num_vuelo: {

        type: String,
        required: true

    },

    origen: {

        type: String,
        required: true

    },

    destino: {

        type: String,
        required: true

    },

    hora: {

        type: String,
        required: true

    },

    fecha: {

        type: String,
        required: true

    },

    codigo_avion: [{

        id: {

            type: mongoose.Schema.ObjectId,
            ref: 'Aviones'

        }

    }],

    piloto_codigo: [{

        id: {

            type: mongoose.Schema.ObjectId,
            ref: 'Piloto'

        }

    }]

});

module.exports = mongoose.model("Vuelos", VuelosSchema);