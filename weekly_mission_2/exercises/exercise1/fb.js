   //FACEBOOK
const user = {
    user: "angel",
    city: "mexico",
    gender: "male",
    age: 20,
    numberFriends: 250,

    getFacebookUserData: function(){
        return `${this.user} live in ${this.city} , ${this.numberFriends} friends`
    }
}
console.log("Name: " + user.user)
console.log(user.getFacebookUserData())

const post = {
    user: "angel",
    description: "description",
    datePost: "11/11/2011",
    numberReactions: 15,
    numberOfShared: 2,

    getPostData: function(){
        return `${this.user} Post ${this.description} date: ${this.datePost} share ${this.numberOfShared}`
    }
}

console.log(post.getPostData())