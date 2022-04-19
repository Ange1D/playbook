console.log("Ejemplo 13: Ejemplo de FindIndex")
const {explorers} = require('./explorers.js');

const first_city=explorers.findIndex(explorer => explorer.city.length > 4)
console.log(first_city)