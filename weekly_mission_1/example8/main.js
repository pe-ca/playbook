// Se importa la clase Logger y se asigna a la referencia MyLogger
import MyLogger from './logger.js'

//Se crea una nueva instancia de la clase Logger usando el constructor a traves de la referencia MyLogger
const logger = new MyLogger('info')
logger.log('Hello World')