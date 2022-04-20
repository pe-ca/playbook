const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: ["js", "c#"],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: ["js"],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: ["elixir"],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]


console.log("Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH")
explorers.forEach(item => console.log(item.name))

console.log("Imprime el stack de cada explorer, usa FOR EACH")
explorers.forEach(item => console.log(item.stack))
explorers.forEach(item => console.log(item.name + " " + item.stack))

console.log("Crea una nueva lista con las listas de stacks de cada explorer, usa MAP")
console.log(explorers.map((item)=> item.stack))

console.log("Obtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes)")
console.log(explorers.filter(item => item.stack.includes("js")))
console.log(explorers.filter(item => item.stack.includes("js")).map(item => item.name))

console.log("Busca el primer explorer que sea de la CDMX, usa FIND")
console.log(explorers.find(item => item.city.toUpperCase() == "CDMX"))

console.log("Obtén la suma de todos los exercises_completed, usa REDUCE")
console.log(explorers.map(item => item.name + ", " + item.exercises_completed))
console.log(explorers.reduce((acc, item) => acc + item.exercises_completed, 0))

console.log("Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")
const boolResult = explorers.some(item => item.missions.frontend.exercisesFinished === true)
console.log(`¿Al menos uno de los explorers tienen ejercicios finalizados de la mision FrontEnd?: ${boolResult}`)

console.log("Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.")
console.log(
    `¿Todos los explorers tienen finalizadoa la mision del OnBoarding?: 
    ${
        explorers.every(item => item.missions.onboarding.isFinished === true)
    }`
)