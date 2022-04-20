const express = require("express");
const router = express.Router();
const appointmentSchema = require("../../models/appointments/Appointment.model");

//medical-appointment-request
router.post("/appointments", (req, res) => {
  const appointment = appointmentSchema(req.body);
  appointment
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//consult-requested-appointments
router.get("/appointments/:id", (req, res) => {
  const { id } = req.params;
  appointmentSchema
    .find({ user: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//consutl-all-assigned-appointments
router.get("/appointments/specialists/:service_id", (req, res) => {
  const { service_id } = req.params;
  appointmentSchema
    .find({ serviceTypeID: service_id })
    .populate("user")
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//medical-appointment-update
router.put("/appointments/user/:appointment_id", (req, res) => {
  const { appointment_id } = req.params;
  const { serviceTypeID, serviceType, date, hour, user } = req.body;
  appointmentSchema
    .updateOne(
      { _id: appointment_id },
      {
        $set: { serviceTypeID, serviceType, date, hour, user },
      }
    )
    .then((data) => res.json({ message: "Cita actualizada correctamente." }))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
