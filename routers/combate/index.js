'use strict'

const router = require('express').Router()
const controladorCombate = require('../../controllers/combate')


/*
router.get('/', (req, res, next) => {
    controladorCombate.get.combate()
        .then(personajes => res.send(personajes))
        .catch(err => res.send('ERROR'))
})
*/



router.get('/', (req, res) => {
    res.write(" Id del personaje 1: " + req.query.idPersonaje1)
    res.write(" Id del personaje 2: " + req.query.idPersonaje2)
    res.write(" El ganador del combate es: " + req.query.idPersonaje1)
    res.end()
})


module.exports = router