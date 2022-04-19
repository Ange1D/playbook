   //TWITTER
   const twitter = {
    user: { 
        user: "carlo",
        username: "carlo",
        bio: "description",
        age: 20
    },
    trending_topic: "NodeJS",
    hashtag: "js",

    getTopic: function(){
        return `Trending Topic: ${this.trending_topic} hashtag ${this.hashtag}`;
      },
    getUser: function(){
        return `User name: ${this.user.username}`;
      }
   }

   console.log("User:" + twitter.getUser());
   console.log("Trending Topic: " + twitter.getTopic());