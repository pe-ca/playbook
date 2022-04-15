class Logger {
    constructor (name) {
        this.count = 0
        this.name = name
    }

    log (message) {
        this.count++
        console.log('[' + this.name + '] ' + message)
    }
}

// exporta un objeto ya instanciado
module.exports = new Logger('DEFAULT') // Nuevo objeto instanciado
//exporta la clase Logger (la clase no se a instanciado solo se pasa el contenido de la clase)
module.exports.Logger = Logger // Clase