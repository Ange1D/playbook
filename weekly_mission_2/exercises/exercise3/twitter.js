   //TWITTER
   class twitter{
     constructor(user,username,bio,age,trending_topic,hashtag){
      this.user=user
      this.username=username
      this.bio=bio
      this.age=age
      this.trending_topic=trending_topic
      this.hashtag=hashtag
     }
     getTopic(){
      return `Trending Topic: ${this.trending_topic} hashtag ${this.hashtag}`;
    }
    getUser(){
      return `User name: ${this.username}`;
    }
   }

   



   const myTwitter = new twitter("carlo", "carlo", "description",20,"NodeJS","js")

  console.log("User:" + myPost.getUser());
  console.log("Trending Topic: " + myPost.getTopic());