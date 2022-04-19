console.log("Ejemplo 11: Ejemplo de Find")
const {explorers} = require('./explorers.js');

const first_cdmx=explorers.find(explorer => explorer.city === 'CDMX')
console.log(first_cdmx)