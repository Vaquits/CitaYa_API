const mongoose = require("mongoose");

const AppointmentSchema = mongoose.Schema({
  serviceTypeID: {
    type: String,
    required: true,
  },
  serviceType: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  hour: {
    type: String,
    required: true,
  },
  orderMedicines: {
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
