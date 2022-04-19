console.log("Ejemplo 3: Instanciar Objeto con atributos")
class Student {
    constructor(name, age, subjects){
      this.name = name
      this.age = age
      this.subjects = subjects
      }
  }

const angelStudent = new Student("Angel", 20, ["NodeJs", "Kotlin"])
console.log(angelStudent)