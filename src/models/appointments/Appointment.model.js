const mongoose = require("mongoose");

const AppointmentSchema = mongoose.Schema({
  serviceTypeID: {
    type: String
  },
  serviceType: {
    type: String
  },
  date: {
    type: String
  },
  hour: {
    type: String
  },
  orderMedicines: {
    type: String,
  },
  active: {
    type: Boolean
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User"
  },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
