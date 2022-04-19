console.log("Ejemplo 7: Setters")
class MissionCommander {
    constructor(name, mission){
        this.name = name
        this.mission = mission
        this.students = 0
        this.lives = 0
    }
  
    get getStudents(){
     return this.students
    }
  
    get getLives(){
     return this.lives
    }
  
    set setStudents(students){
      this.students = students
    }
  
    set setLives(lives){
      this.lives = lives
    }
  }
  

  const missionCommanderNode = new MissionCommander("Carlo", "NodeJS")
  
  console.log(missionCommanderNode.getStudents) 
  console.log(missionCommanderNode.getLives)
  
  missionCommanderNode.setStudents = 100
  missionCommanderNode.setLives = 3
  
  console.log(missionCommanderNode.getStudents) 
  console.log(missionCommanderNode.getLives)