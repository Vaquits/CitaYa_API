const mongoose = require('mongoose')
const bcrypt = require("bcrypt"); 

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
        type: String
    },
    appointments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Appointment'
    }]
})

UserSchema.methods.encryptClave = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

module.exports = mongoose.model('User', UserSchema)