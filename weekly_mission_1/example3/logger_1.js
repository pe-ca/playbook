/*
Esto también es la declaración de una función

module.exports hará que puedas invocar esta función en otro script como:
> const logger = require('./logger')

y usarla como:

> logger("Heeey!")
*/

// al exportar una funcion de esta manera se podra invocar desde otro archivo sin hacer referencia a un nombre especifico ya que esta funcion no tiene un nombre asignado
module.exports = (message) => {
    console.log(`info: ${message}`)
}