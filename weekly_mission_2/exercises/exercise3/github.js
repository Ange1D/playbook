//Tomando de referencia el ejercicio 1, convierte esos objetos a definiciones de clases, trata de aplicar lo visto en los ejemplos. 
  //GITHUB
class repo{
  constructor(name,author,language,numberOfCommits,stars,forks,issues_open,issues_close){
      this.name=name
      this.author=author
      this.language=language
      this.numberOfCommits=numberOfCommits
      this.stars=stars
      this.forks=forks
      this.issues_open=issues_open
      this.issues_close=issues_close
  }
  getTotalIssues(){
      return this.issues_open + this.issues_close
    }

  getGeneralInfo(){
      return `This repository ${this.name} was created by ${this.author}`
    }
}
const myRepo = new repo("LaunchX", "Angel", "js", 100,10,10,10,10)

console.log("repository name:" + myRepo.name)
console.log("Total issues: " + myRepo.getTotalIssues())
console.log(myRepo.getGeneralInfo())


class issue{
consructor(title,repositoryNameAssociated,status,numberOfComments,labels,author,dateCreated,lastUpdated){
  this.title=title
  this.repositoryNameAssociated=repositoryNameAssociated
  this.status=status
  this.numberOfComments=numberOfComments
  this.labels=labels
  this.author=author
  this.dateCreated=dateCreated
  this.lastUpdated=lastUpdated
}
getTitleAndAuthor(){
  return this.title + this.author;
}
getGeneralInfo(){
  return `This repository ${this.title} was created by ${this.repositoryNameAssociated}`
}
}

const myIssue = new issue("Issues on this page", "ange1d", "active", 100,"bug, feature","Angel",15,17)


   console.log("repository name: " + myIssue.title)
   console.log("Status del issues: " + myIssue.status)
   console.log(myIssue.getGeneralInfo())


   class pullRequest{
     constructor(title,branchName,dateCreated,status,repositoryNameAssociated){
      this.title=title
      this.branchName=branchName
      this.dateCreated=dateCreated
      this.status=status
      this.repositoryNameAssociated=repositoryNameAssociated
     }
     getStatus(){
      return this.status
    }
    getTitleAndAutor(){
      return `This repository ${this.title} was created by ${this.repositoryNameAssociated}`
    }
   }


   const myPullRequest = new pullRequest("pull project", "main", 19/04/2022, "updated","ange1d")

   console.log("repository name: " + myPullRequest.getTitleAndAutor());
   console.log("Status: " + myPullRequest.getStatus());