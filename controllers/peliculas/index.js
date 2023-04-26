'use strict'

const moduloPeliculas = require('../../models/peliculas')

module.exports = {
    get: {
        all: moduloPeliculas.get.all,
        byId: moduloPeliculas.get.byId
    },
    add: moduloPeliculas.add
}