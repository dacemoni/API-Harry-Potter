'use strict'

const router = require('express').Router()
const controladorPeliculas = require('../../controllers/peliculas')
const controladorPersonajes = require("../../controllers/personajes");

router.get('/', (req, res, next) => {
    controladorPeliculas.get.all()
        .then(peliculas => res.send(peliculas))
        .catch(err => res.send('ERROR'))
})

router.get('/:idPelicula', (req, res, next) => {
    controladorPeliculas.get.byId(req.params.idPelicula)
        .then(peliculas => res.send(peliculas))
        .catch(err => res.send('ERROR'))
})

router.get('/personajes/:idPelicula', (req, res, next) => {
    controladorPersonajes.get.byPeliculas(req.params.idPelicula)
        .then(personajes => res.send(personajes))
        .catch(err => res.send('ERROR'))
})

router.post('/', (req, res, next) => {
    controladorPeliculas.add(req.body)
    res.send('Pelicula almacenada')
})

module.exports = router