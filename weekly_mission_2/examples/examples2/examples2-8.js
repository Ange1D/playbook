console.log("Ejemplo 8: Métodos static")
class Toolbox {
    static getMostUsefulTools(){
      return ["Command line", "git", "Text Editor"]
    }
  }
  
  console.log(Toolbox.getMostUsefulTools())