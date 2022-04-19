console.log("Ejemplo  9: Herencia")
class Developer {
    constructor(name, mainLang, stack){
      this.name =  name
      this.mainLang = mainLang
      this.stack = stack
    }
  
    get getName() {
          return this.name
      }
  }
  

  const carloDev = new Developer("Carlo", "js", ["elixir", "groovy", "lisp"])
  console.log(carloDev)
  
  class LaunchXStudent extends Developer{
  }
  
  const angelLaunchXDev = new LaunchXStudent("Angel", "js", ["elixir", "groovy", "lisp"])
  console.log(angelLaunchXDev)
  console.log(angelLaunchXDev.getName)