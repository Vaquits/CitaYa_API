const parser = require("body-parser");
const express = require('express')
const app = express()
const port = 3000
const userRoutes = require("./routes/users/User.route");
const appointmentRoutes = require("./routes/appointments/Appointment.route");
const authRoutes = require("./routes/users/authentication")
const mongoose = require('mongoose')
require('dotenv').config()
app.use(parser.urlencoded({ extended: false }))
app.use(parser.json());

app.use("/api", userRoutes);
app.use("/api", appointmentRoutes);
app.use("/api", authRoutes);

app.get('/', (req, res) => {
    res.send('Hello for all people in this world!')
})

mongoose
    .connect(process.env.MONGOBD_URL)
    .then(() => console.log('Succesfully connection DB'))
    .catch((error) => console.log('Error', error))

app.listen(port, () => {
    console.log('App running now in port: ', port)
})