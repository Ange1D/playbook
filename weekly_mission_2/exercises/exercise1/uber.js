   //UBER
const profile = {
    name: "Angel",
    stars: 4.5,
    numberTravels: 15,
    email: "angel@gmail.com",
    telephone: "000-111-2222",

    getProfileStatus: function(){
        return `${this.name} ${this.stars} stars, email ${this.email}`
    }
}
console.log("Name: " + profile.name)
console.log(profile.getProfileStatus())  

const travel = {
    user: "Angel",
    driver: "Angel",
    driverStars: 4.5,
    travelTime: "50",
    travelDestination: "Queretaro",
    travelOrigin: "CDMX",
    payMethod: "Paypal",
    cost: 1000,

    getTravelData: function(){
        return `${this.driver} time ${this.travelTime} from ${this.travelOrigin} to ${this.travelDestination}`
    }
}

console.log(travel.getTravelData())