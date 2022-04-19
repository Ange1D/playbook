//GITHUB
const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("repository name:" + repo.name)
   console.log("Total issues: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

   const issue = {
    title: "Issues on this page",
    repositoryNameAssociated: "ange1d",
    status: "active",
    numberOfComments: 100,
    labels: 'bug, feature',
    author: 'Angel',
    dateCreated: 15,
    lastUpdated: 17,
    getTitleAndAuthor: function(){
      return this.title + this.author;
    },
    getGeneralInfo: function(){
      return `This repository ${this.title} was created by ${this.repositoryNameAssociated}`
    }
   }

   console.log("repository name: " + issue.title)
   console.log("Status del issues: " + issue.status)
   console.log(issue.getGeneralInfo())

   const pullRequest = {
    title: "pull project",
    branchName: "main",
    dateCreated: 19/04/2022,
    status: "updated",
    repositoryNameAssociated: "ange1d",
    getStatus: function(){
      return this.status
    },
    getTitleAndAutor: function(){
      return `This repository ${this.title} was created by ${this.repositoryNameAssociated}`
    }
   }

   console.log("repository name: " + pullRequest.getTitleAndAutor());
   console.log("Status: " + pullRequest.getStatus());