// Ejemplo 4: Métodos en los objetos
class Repository {
    constructor(name, author, language, stars){
        this.name = name
        this.author = author
        this.language = language
        this.stars = stars
    }

    getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
        return `Repository ${this.name} has ${this.stars} stars`
    }
}
console.log("Ejemplo 4: Métodos en los objetos")
// Creacion de instancia de una clase con constructor
const myRepo = new Repository("LaunchX", "carlogilmar", "js", 100)
// Ejecucion de un metodo de la clase que se instancio
console.log(myRepo.getInfo())