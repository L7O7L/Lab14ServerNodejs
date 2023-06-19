const mongoose = require('mongoose');

const BaseSchema = new mongoose.Schema({

    nombre: {

        type: String,
        required: true

    },

    aviones_mantenimiento: [{

        id: {

            type: mongoose.Schema.ObjectId,
            ref: 'Aviones'

        }

    }],

    tripulacion_regreso: [{

        id: {

            type: mongoose.Schema.ObjectId,
            ref: 'Base'

        }

    }]

});

module.exports = mongoose.model("Base", BaseSchema);