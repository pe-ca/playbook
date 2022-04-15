class Logger{
    constructor(name){
        // Al crear este objeto se guardarán estos valores
        // al ejecutarse el contenido del contructor se cearan y asignaran los valores especificados
        this.count = 0
        this.name = name
    }

    log(message){
        this.count ++ // cada que se ejecute el metodo log count aumentara en 1
        console.log('[' + this.name + ']' + message)
    }
}
module.exports = new Logger('DEFAULT')// crea una instancia de la clase ya inicializada para exportarse