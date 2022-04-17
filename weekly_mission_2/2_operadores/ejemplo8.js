// Ejemplo 8: Filtrar una lista por condicional
//lista de objetos
const scores = [
    { name: 'A', score: 95 },
    { name: 'L', score: 98 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
]
// filtra y obtiene solo los elemento s que tuenen un score mayor a 80
const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log("Ejemplo 8: Filtrando elementos por score")
console.log(scoresGreaterEighty)