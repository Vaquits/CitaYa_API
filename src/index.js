const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello for all people!')
})

app.listen(port, () => {
    console.log('App running now in port: ', port)
})