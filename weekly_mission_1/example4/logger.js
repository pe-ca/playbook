class Logger { // declaracion de clase
    constructor(name) { // declaracion de constructor con parametro "name"
        // this es una variable para referenciar el valor del contexto local de esta clase
        // this se utiliza para hacer referencia al cntenido de la clase misma
        this.name = name // Estás variables se le conocen como atributos
    }

    // método
    // this.name es la variable que se guarda en el contexto local
    // message es una variable que se le pasa al ejecutar este método
    info (message) {
        console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
    }

    // método
    verbose (message) {
        console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
    }
}
// Esta clase se exporta en este módulo
module.exports = Logger