'use strict'

const moduloPersonajes = require('../../models/personajes')

module.exports = {
    get: {
        all: moduloPersonajes.get.all,
        byId: moduloPersonajes.get.byId
    },
    add: moduloPersonajes.add
}