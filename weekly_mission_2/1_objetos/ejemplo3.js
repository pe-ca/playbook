// Ejemplo 3: Objeto con diferentes propiedades
const myObject3 = {
    name: "Tulio", //Propiedades simples
    age: 2,
    nicknames: [ //Propiedad con array
        "Tulipan",
        "Tulancingo",
        "Tulish"
    ],
    address: { //Propiedad con un objeto
        zip_code: "10000",
        street: "Dr. Vertiz 11 Benito Juarez",
        city: "CDMX"
    }
}
console.log("Ejemplo 3: Objeto con diferentes propiedades")
console.log(myObject3) //imprime el objeto con todo su contenido
console.log(myObject3.name) //imprime solo la propiedad especifica del objeto

//distintas formas de acceder a una propiedad especifica dentro de un objeto
console.log(myObject3["address"])
console.log(myObject3.address)