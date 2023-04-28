'use strict'

const mysql = require('mysql')

const pool = mysql.createPool({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "apiharrypotter",
    connectionLimit: 10
})

function query(sql, params) {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (err, res, fields) => {
            if (err) {
                console.log('ERROR DB', err)
                reject(err)
                return
            }
            console.log('Fields', fields)
            console.log('Resultados', res)
            resolve(res)
        })
    })
}

const dbPersonajes = []

function addPersonajes(personajes) {
    dbPersonajes.push(personajes)
}

function deletePersonajes(peliculas) {
    dbPersonajes.pop(peliculas)
}

function getPersonajes() {
    return query('SELECT * FROM personajes')
}

function getPersonaje(id) {
    return query('SELECT * FROM personajes WHERE id = ?', [id])
}

function getPersonajePelicula(id) {
    return query('SELECT * FROM pelicula_personajes WHERE idPelicula = ?', [id])
}

module.exports = {
    get: {
        all: getPersonajes,
        byId: getPersonaje,
        byPeliculas: getPersonajePelicula
    },
    add: addPersonajes,
    delete: deletePersonajes
}