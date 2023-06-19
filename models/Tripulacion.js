const mongoose = require('mongoose');

const TripulacionSchema = new mongoose.Schema({

    codigo: {

        type: String,
        required: true

    },

    nombre: {

        type: String,
        required: true

    },

    num_vuelo: [{

        id: {

            type: mongoose.Schema.ObjectId,
            ref: 'Vuelos'

        }

    }],

    regreso: {

        type: mongoose.Schema.ObjectId,
        ref: 'Base'

    }

});

module.exports = mongoose.model("Tripulacion", TripulacionSchema);