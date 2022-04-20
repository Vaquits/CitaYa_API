const mongoose = require('mongoose')

const AppointmentSchema = mongoose.Schema({
    
    serviceType: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    hour: {
        type: String,
        required: true
    },
    orderMedicines: {
        type: String
    },
    active: {
        type: Boolean, 
        default: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('Appointment', AppointmentSchema)