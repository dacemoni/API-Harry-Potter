'use strict'

const router = require('express').Router()
const controladorPersonajes = require('../../controllers/personajes')
const controladorPeliculas = require("../../controllers/peliculas");


router.get('/', (req, res, next) => {
    controladorPersonajes.get.all()
        .then(personajes => res.send(personajes))
        .catch(err => res.send('ERROR'))
})

router.get('/:idPersonaje', (req, res, next) => {
    controladorPersonajes.get.byId(req.params.idPersonaje)
        .then(personajes => res.send(personajes))
        .catch(err => res.send('ERROR'))
})

router.get('/peliculas/:idPersonaje', (req, res, next) => {
    controladorPeliculas.get.byPersonajes(req.params.idPersonaje)
        .then(peliculas => res.send(peliculas))
        .catch(err => res.send('ERROR'))
})

router.post('/', (req, res, next) => {
    controladorPersonajes.add(req.body)
    res.send('Personaje almacenado')
})

module.exports = router