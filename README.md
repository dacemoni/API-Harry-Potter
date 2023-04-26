# EJERCICIO: API REST - Harry Potter

## Introducción

El alumno implementará un API REST con Node.JS que complete la especificación indicada en el presente documento.

## Base de datos

El API almacenará los datos persistentes en una base de datos MySQL o MariaDB (a elección del alumno) y se usarán las siguientes tablas:

    * Películas
    * Personajes

## API REST

El API debe ofrecer un CRUD completo sobre las colecciones: Películas y Personajes.

Los métodos HTTP a utilizar deberán ser los adecuados para cada operación. Además, se ofrecerá la consulta en las colecciones:

   /peliculas/:idPelicula/personajes - Mostrar los personajes de la película
   
   /personajes/:idPersonajes/peliculas - Mostrar las películas dónde sale el personaje

Objetos:

PELICULA: {
    id,
    title,
    length,
    sinopsis,
    year
}

PERSONAJE: {
    id,
    name,
    description
}

## API Combate

Finalmente, implementar una serie de recursos virtuales que nos permitan simular combates entre los personajes.

Los combates serán definidos por el alumno (juego de Rol), y cada personaje almacenará una serie de atributos (magia, fuerza, poder, ...) a elección del alumno.

Cada combate aplicará un factor aleatorio además de varias iteracciones de combate. Devolverá el estado final de cada personaje tras el combate.

   * GET /combate/:idPersonaje - Obtener los atributos del personaje actuales
   * POST /combate?p1=idPersonaje1&p2=idPersonaje2 - Realizar un nuevo combate entre ambos personajes
   * PUT /combate/:idPersonaje - Poder cambiar atributos al personaje (curación); en el cuerpo del mensaje se enviarán los nuevos atributos

Obviamente, tras un combate, al volver a consultar el GET, obtendremos el estado del personaje tras el combate.

## Web de pruebas

Implementar una sencilla web para probar el API, no es necesario que sea ‘bonita’, simplemente que ofrezca una serie de botones y formularios para poder probar el API cómodamente.
