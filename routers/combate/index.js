'use strict'

const router = require('express').Router()
const controladorCombate = require('../../controllers/combate')



router.get('/', (req, res, next) => {
    controladorCombate.get.combate()
        .then(personajes => res.send(personajes))
        .catch(err => res.send('ERROR'))
})

/*
app.get('/combate', (req, res) => {
    res.write(" Me has pasado el nombre: " + req.query.nombre)
    res.write(" Me has pasado la asignatura: " + req.query.asignatura)
    res.end()
})
*/

module.exports = router