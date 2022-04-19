console.log("Ejemplo 4: Crear un objeto con métodos")

const ajolonauta ={
    name: "",
    mission:"Node JS",
    sayHelloToExplorers: function(){
        console.log("Soy el ajolonauta")
    },
    tellMeMore: function() {
        return `ajolonauta: ${this.name}`
    }
}

console.log("ajolonauta")
ajolonauta.sayHelloToExplorers()
console.log(ajolonauta.tellMeMore())