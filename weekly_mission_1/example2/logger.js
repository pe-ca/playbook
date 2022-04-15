// logger.js

// Al agregar la palabra "exports" a una variable hace que el contenido de
// esta sea accesible desde algun archivo que la invoque siempre

// Esta es una función que se guardara en este módulo como info
exports.info = (message) => {
    console.log(`info: ${message}`)
}

// Esta es una función que se guardara en este módulo como verbose
exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
}

// Esta funcion solo es accesible dentro de logger.js
const exampleFoo = ()=>{
    console.log("Esta funcion no es accesible desde otro archivo")
}

/*
const logger = require('./logger')
logger.info('This is an informational message')
logger.verbose('This is a verbose message')
*/
