// Ejemplo 6: Getters para acceder a los atributos del objeto
class Ajolonauta {
    constructor(name, age, stack){
        // Elementos/variables internas de la clase
        this.name = name
        this.age = age
        this.stack = stack
        this.exercises_completed = 0
        this.exercises_todo = 99
    }

    // Podemos acceder a los atributos de esta clase
    // permite exponer el valor de una variable de clase en las instancias que existen
    get getExercisesCompleted() {
        return this.exercises_completed
    }
}

console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
const woopa = new Ajolonauta("Woopa", 1, [])
console.log(woopa.getExercisesCompleted)