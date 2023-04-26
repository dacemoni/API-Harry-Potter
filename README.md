# EJERCICIO: API REST - Harry Potter

### Introducción

El alumno implementará un API REST con Node.JS que complete la especificación indicada en el presente documento.

### Base de datos

El API almacenará los datos persistentes en una base de datos MySQL o MariaDB (a elección del alumno) y se usarán las siguientes tablas:

    * Películas
    * Personajes

### API REST

El API debe ofrecer un CRUD completo sobre las colecciones: Películas y Personajes.

Los métodos HTTP a utilizar deberán ser los adecuados para cada operación. Además, se ofrecerá la consulta en las colecciones:

   /peliculas/:idPelicula/personajes - Mostrar los personajes de la película
   
   /personajes/:idPersonajes/peliculas - Mostrar las películas dónde sale el personaje

Objetos:

PELICULA: {
    id,
    title,
    length,
    year
}

PERSONAJE: {
    id,
    name,
    description
}

### Web de pruebas

Implementar una sencilla web para probar el API, no es necesario que sea ‘bonita’, simplemente que ofrezca una serie de botones y formularios para poder probar el API cómodamente.
