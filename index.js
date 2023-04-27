'use strict'

const peliculas = require('./routers/peliculas')
const personajes = require('./routers/personajes')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false, limit: '1mb' }))
app.use(bodyParser.json({ limit: '1mb' }))

app.get('/', (req, res, next) => {
    res.send("Hola estas usando la api de harry potter ")
})

app.use('/peliculas', peliculas)
app.use('/personajes', personajes)

app.listen(3033)
