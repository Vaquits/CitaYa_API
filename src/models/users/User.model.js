const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    documentType: {
        type: String,
        required: true
    },
    documentNumber: {
        type: String,
        required: true,
        unique: true
    },
    names: {
        type: String,
        required: true
    },
    surnames: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String
    },
    mobileNumber: {
        type: String,
        required: true
    },
    appointments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Appointment'
    }]
})

module.exports = mongoose.model('User', UserSchema)