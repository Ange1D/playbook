//Tomando de referencia el ejercicio 1, convierte esos objetos a definiciones de clases, trata de aplicar lo visto en los ejemplos. 
   //FACEBOOK

class user{
    constructor(user,city,gender){
        this.user=user
        this.city=city
        this.gender=gender
        this.age=age
        this.numberFriends=numberFriends
    }

    getFacebookUserData(){
        return `${this.user} live in ${this.city} , ${this.numberFriends} friends`
    }
}   

const myUser = new user("angel", "mexico", "male",250)


   console.log("Name: " + myUser.user)
   console.log(myUser.getFacebookUserData())


class post{
    constructor(user,description,datePost,numberReactions,numberOfShared){
        this.user=user
        this.description=description
        this.datePost=datePost
        this.numberReactions=numberReactions
        this.numberOfShared=numberOfShared
    }

    getPostData(){
        return `${this.user} Post ${this.description} date: ${this.datePost} share ${this.numberOfShared}`
    }
}





const myPost = new post("angel", "description", "11/11/2011",15,2)

console.log(myPost.getPostData())