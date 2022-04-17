// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que
// cumpla con la evaluacion que se indica
const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log("Ejemplo 11: Primera edad menor a 20 es: "+ age)
