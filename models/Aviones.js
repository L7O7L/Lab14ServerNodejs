const mongoose = require('mongoose');

const AvionesSchema = new mongoose.Schema({

    codigo: {

        type: String,
        required: true

    },

    tipo: {

        type: String,
        required: true

    },

    base: {

        type: mongoose.Schema.ObjectId,
        ref: 'Base'

    }

});

module.exports = mongoose.model("Aviones", AvionesSchema);