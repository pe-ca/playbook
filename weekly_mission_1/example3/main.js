/*
node main.js
*/

const logger1 = require('./logger_1')
const logger2 = require('./logger_2')

// se utilizo module.exports para exponer una funcion sin un nombre asignado
logger1('This is an informational message')
// se utilizo module.exports.verbose para exponer una funcion con un nombre especifico asignado
logger2.verbose('This is a verbose message')
