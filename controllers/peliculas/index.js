'use strict'

const moduloPeliculas = require('../../models/peliculas')

module.exports = {
    get: {
        all: moduloPeliculas.get.all,
        byId: moduloPeliculas.get.byId,
        byPersonajes: moduloPeliculas.get.byPersonajes
    },
    add: moduloPeliculas.add,
    delete: moduloPeliculas.delete
}