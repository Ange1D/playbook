console.log("Ejemplo 14: Ejemplo Some")
const {explorers} = require('./explorers.js');

const areSomeTrue = explorers.some((b) =>  b.missions.onboarding.isFinished === false)
console.log(areSomeTrue)