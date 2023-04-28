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

function fight(id, id2) {
    return query('SELECT * FROM personajes WHERE idPersonaje1 = ? AND idPersonaje2 = ?', [id, id2])
}

module.exports = {
    get: {
        combate: fight
    },
}