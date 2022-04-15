
/*
Al exportar una función/objeto así:

> module.exports.verbose

Estaremos exportando el contenido con el nombre `verbose`

module.exports hará que puedas invocar esta función en otro script como:
> const logger = require('./logger')

y usarla como:

> logger.verbose("Heeey!")
*/

// al exportar una funcion de esta manera se podra invocar desde otro archivo haciendo referencia a un nombre especifico ya que esta funcion si tiene un nombre asignado
module.exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
}