console.log("Ejemplo 4: Métodos en los objetos")
class Repository {
    constructor(name, author, language, stars){
     this.name = name
     this.author = author
     this.language = language
     this.stars = stars
    }
  
    getInfo(){ 
      return `Repository ${this.name} has ${this.stars} stars`
    }
  }

  const myRepo = new Repository("LaunchX", "ange1d", "js", 10)
  console.log(myRepo.getInfo())
  