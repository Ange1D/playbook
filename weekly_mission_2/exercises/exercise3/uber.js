   //UBER

class profile{
    constructor(name,stars,numberTravels,email,telephone){
        this.name=name
        this.stars=stars
        this.numberTravels=numberTravels
        this.email=email
        this.telephone=telephone
    }
    getProfileStatus(){
        return `${this.name} ${this.stars} stars, email ${this.email}`
    }
}   

const myProfile = new profile("Angel", 4.5, 15,"angel@gmail.com","000-111-2222")

console.log("Name: " + myProfile.name)
console.log(myProfile.getProfileStatus())  

class travel{
    constructor(user,driver,driverStars,travelTime,travelDestination,travelOrigin,payMethod,cost){
        this.user=user
        this.driver=driver
        this.driverStars=driverStars
        this.travelTime=travelTime
        this.travelDestination=travelDestination
        this.travelOrigin=travelOrigin
        this.payMethod=payMethod
        this.cost=cost
    }
    getTravelData(){
        return `${this.driver} time ${this.travelTime} from ${this.travelOrigin} to ${this.travelDestination}`
    }
}

const myTravel = new travel("Angel", "Angel", 4.5,"50","Queretaro","CDMX","Paypal",1000)

console.log(myTravel.getTravelData())