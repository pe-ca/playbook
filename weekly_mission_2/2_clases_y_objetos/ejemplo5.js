// Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
//map regresara un nuevo array con los elementos del array original pero a cada uno de los elementos se
//les evaluara para que se conviertan en mayidculas
const namesToUpperCase = names.map((name) => name.toUpperCase())
const namesToUpperCase2 = names.map((name) => name.toLowerCase())

console.log("Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas")
console.log(namesToUpperCase)
console.log(namesToUpperCase2)