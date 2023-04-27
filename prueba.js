'use strict'

$(document).ready(function() {
    // Obtener todas las películas
    $('#obtenerPeliculas').click(function() {
        $.get('http://localhost:3033/peliculas', function(data) {
            console.log(data)
        })
    })

    // Obtener una película por ID
    $('#obtenerPeliculaForm').submit(function(event) {
        event.preventDefault()
        var idPelicula = $('#idPelicula').val()
        $.get('http://localhost:3033/peliculas/' + idPelicula, function(data) {
            console.log(data)
        })
    })

    // Agregar una película
    $('#agregarPeliculaForm').submit(function(event) {
        event.preventDefault()
        var nombrePelicula = $('#nombrePelicula').val()
        $.post('http://localhost:3033/peliculas', {nombre: nombrePelicula}, function(data) {
            console.log(data)
        })
    })

    // Obtener todos los personajes
    $('#obtenerPersonajes').click(function() {
        $.get('http://localhost:3033/personajes', function(data) {
            console.log(data)
        })
    })

    // Obtener un personaje por ID
    $('#obtenerPersonajeForm').submit(function(event) {
        event.preventDefault()
        var idPersonaje = $('#idPersonaje').val()
        $.get('http://localhost:3033/personajes/' + idPersonaje, function(data) {
            console.log(data)
        })

