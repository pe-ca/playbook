const Logger = require('./logger') // Invocas el módulo que contiene la clase

// Cuando una clase cuenta con un constuctor este siempre se llama por defecto al crear una nueva instancia de la clase.
// Los constructores sirven para inicializar o ejecutara algun proceso definido por la clase para que esta se inicialice de forma correcta
// Los constructores son opcionales dentro de las clases

// Creación de un objeto
const dbLogger = new Logger('DB') // Creas un objeto nuevo, esto llama por default el constructor de la clase
// invocación del método
dbLogger.info('This is an informational message')

// Creación de otro objeto
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')