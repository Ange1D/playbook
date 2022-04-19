console.log("Ejemplo 12: Ejemplo de Find")
const {explorers} = require('./explorers.js');

const first_rate=explorers.find(explorer => explorer.rate > 80)
console.log(first_rate)