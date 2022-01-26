const express = require('express')
const app = express()
const port = 3000
const consign = require('consign')

consign()
    .then('./api')
    .then('./config')
    .into(app)

app.listen(port, () => {
    console.log('Servindo porta 3000')
})
