const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Hello for all people!')
})

mongoose
    .connect(process.env.MONGOBD_URL)
    .then(() => console.log('Succesfully connection DB'))
    .catch((error) => console.log('Error', error))

app.listen(port, () => {
    console.log('App running now in port: ', port)
})