console.log("Ejemplo 10: Ejemplo de Every")
const {explorers} = require('./explorers.js');

const areAllStr = explorers.every((explorer) => typeof explorer.name === 'string') 
console.log(areAllStr)