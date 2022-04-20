const mongoose = require('mongoose');
const bcrypt = require("bcrypt"); 

const SpecialistSchema = mongoose.Schema({

    documentNumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Specialist', SpecialistSchema)