console.log("Ejemplo 6: Getters")
class Ajolonauta {
    constructor(name, age, stack){
     this.name = name
     this.age = age
     this.stack = stack
     this.exercises_completed = 0
     this.exercises_todo = 99
    }
  
    get getExercisesCompleted() {
          return this.exercises_completed
    }
  }
  

  const woopa = new Ajolonauta("Woopa", 1, [])
  console.log(woopa.getExercisesCompleted)