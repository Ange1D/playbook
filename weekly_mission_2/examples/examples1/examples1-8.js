console.log("Ejemplo 8: Ejemplo de Filter")
const {explorers} = require('./explorers.js');

const explorers_with_rate = explorers.filter((explorer) => explorer.rate > 80)
console.log(explorers_with_rate)