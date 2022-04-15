// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {//objeto myPet
    name: "Woopa",//propiedad
    sayHelloToMyPet: function(yourPet){//propiedad que guarda una funcion, la funcion recibe un parametro
        console.log(`${this.name} say's hello to ${yourPet}`)
    }
}

console.log("Ejemplo 5: Objeto con método que recibe parámetros")
myPet.sayHelloToMyPet("Tulio")