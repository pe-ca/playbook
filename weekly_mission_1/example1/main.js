console.log("Nota: Creación de un objeto con propiedades")
// Creación de un objeto vacio
let myCar = new Object();
// Se agregan cada una de las propiedades que se desean en el objeto con el valor que van a contener, un objeto puede tener n cantidad de propiedades
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
// Imprimiendo objeto
console.log(myCar)
console.log("\n")


console.log("Nota: Declaración de un objeto con variables locales y públicas")
const myModule = (() => {
    // Variables declaradas dentro de un contexto, todas las variables que no sean expuestas a travez de un return seran privadas
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
    const privateBar = [1,2,3,4]
    const baz = "Soy un valor que va a ser expuesto"
    // Declaracion del objeto que se expondra a travez del return
    const exported = {
        publicFoo: "Valor público, pueden verme desde donde me llamen",
        publicBar: "Otro valor público",
        publicBaz: baz
    }
    // Exposición de variables locales
    return exported
})()
console.log(myModule)