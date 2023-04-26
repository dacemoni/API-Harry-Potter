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

const dbPeliculas = []

function addPeliculas(peliculas) {
    dbPeliculas.push(peliculas)
}

function getPeliculas() {
    return query('SELECT * FROM peliculas')
}

function getPelicula(id) {
    return query('SELECT * FROM peliculas WHERE id = ?', [id])
}

module.exports = {
    get: {
        all: getPeliculas,
        byId: getPelicula
    },
    add: addPeliculas
}