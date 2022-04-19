console.log("Ejemplo 5: Ejemplo Map")
const {explorers} = require('./explorers.js');

const namesToUpperCase = explorers.map((explorer) => explorer.name.toUpperCase())
console.log(namesToUpperCase)