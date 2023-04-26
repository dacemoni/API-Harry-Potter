'use strict'

const express = require('express');
const mysql = require('mysql/promise');
const bodyParser = require('body-parser');

// Crear una instancia de express
const app = express();

// Parsear los datos enviados en el body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Conectar a la base de datos MySQL
const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'harry_potter_db'
});

// Obtener todas las películas
app.get('/peliculas', async (req, res) => {
    const [rows] = await connection.execute('SELECT * FROM peliculas');
    res.json(rows);
});

// Crear una nueva película
app.post('/peliculas', async (req, res) => {
    const {id, title, length, year} = req.body;
    await connection.execute('INSERT INTO peliculas (id, title, length, year) VALUES (?, ?, ?, ?)', [id, title, length, year]);
    const [rows] = await connection.execute('SELECT * FROM peliculas WHERE id = ?', [id]);
    res.json(rows[0]);
});

// Obtener una película por su ID
app.get('/peliculas/:id', async (req, res) => {
    const [rows] = await connection.execute('SELECT * FROM peliculas WHERE id = ?', [req.params.id]);
    res.json(rows[0]);
});

// Actualizar una película existente
app.put('/peliculas/:id', async (req, res) => {
    const {title, length, year} = req.body;
    await connection.execute('UPDATE peliculas SET title = ?, length = ?, year = ? WHERE id = ?', [title, length, year, req.params.id]);
    const [rows] = await connection.execute('SELECT * FROM peliculas WHERE id = ?', [req.params.id]);
    res.json(rows[0]);
});

// Eliminar una película existente
app.delete('/peliculas/:id', async (req, res) => {
    await connection.execute('DELETE FROM peliculas WHERE id = ?', [req.params.id]);
    res.json({message: 'Película eliminada correctamente'});
});

// Obtener todos los personajes
app.get('/personajes', async (req, res) => {
    const [rows] = await connection.execute('SELECT * FROM personajes');
    res.json(rows);
});

// Crear un nuevo personaje
app.post('/personajes', async (req, res) => {
    const {id, name} = req.body;
    await connection.execute('INSERT INTO personajes (id, name) VALUES (?, ?)', [id, name]);
    const [rows] = await connection.execute('SELECT * FROM personajes WHERE id = ?', [id]);
    res.json(rows[0]);
});

// Obtener un personaje por su ID
app.get('/personajes/:id', async (req, res) => {
    const [rows] = await connection.execute('SELECT * FROM personajes WHERE id = ?', [req.params.id]);
    res.json(rows[0]);
});

// Actualizar un personaje existente
app.put('/personajes/:id', async (req, res) => {
    const {name} = req.body;
    await connection.execute('UPDATE personajes SET name = ? WHERE id = ?', [name, req.params.id]);
    const [rows] = await connection.execute('SELECT * FROM personajes WHERE id = ?', [req.params.id]);
    res.json(rows[0]);
});

// Eliminar un personaje existente
app.delete('/personajes/:id', async (req, res) => {
    await connection.execute('DELETE FROM personajes WHERE id = ?', [req.params.id]);
    res.json({message: 'Personaje eliminado correctamente'});
});

// Obtener todos los personajes de una película
app.get('/peliculas/:id/personajes', async (req, res) => {
    const [rows] = await connection.execute('SELECT p.id, p.name FROM personajes p JOIN peliculas_personajes pp ON p.id = pp.personaje_id WHERE pp.pelicula_id = ?', [req.params.id]);
    res.json(rows);
});

// Añadir un personaje a una película
app.post('/peliculas/:id/personajes', async (req, res) => {
    const {personaje_id} = req.body;
    await connection.execute('INSERT INTO peliculas_personajes (pelicula_id, personaje_id) VALUES (?, ?)', [req.params.id, personaje_id]);
    const [rows] = await connection.execute('SELECT p.id, p.name FROM personajes p JOIN peliculas_personajes pp ON p.id = pp.personaje_id WHERE pp.pelicula_id = ?', [req.params.id]);
    res.json(rows);
});
// Eliminar un personaje de una película
app.delete('/peliculas/:pelicula_id/personajes/:personaje_id', async (req, res) => {
    await connection.execute('DELETE FROM peliculas_personajes WHERE pelicula_id = ? AND personaje_id = ?', [req.params.pelicula_id, req.params.personaje_id]);
    const [rows] = await connection.execute('SELECT p.id, p.name FROM personajes p JOIN peliculas_personajes pp ON p.id = pp.personaje_id WHERE pp.pelicula_id = ?', [req.params.pelicula_id]);
    res.json(rows);
});

// Iniciar el servidor
app.listen(3033, () => {
    console.log('Servidor iniciado en el puerto 3033');
});
