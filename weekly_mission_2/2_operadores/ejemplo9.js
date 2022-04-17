// Ejemplo 9: Uso del reduce
//reduce realiza un recorrido y regresa 1 solo valor, en este caso se ejecuta una sumatoria
const numbers9 = [1, 2, 3, 4, 5]
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)