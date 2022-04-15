const logger = require('./logger')

// Ya se puede usar directamente el objeto instanciado en el módulo logger
// es posible usar el objeto logger sin invocar el constructor debido a que dentro del archivo logger.js se inicializo al moneto de realizar la exportacion
// es decir exporta un objeto ya inicializado
logger.log('This is an informational message')


//También pueder instanciar uno nuevo de esta manera:
// es posible sobreescribir el objeto ya exportado utilizando su constructor
const customLogger = new logger.constructor('CUSTOM')
customLogger.log('This is an informational message')