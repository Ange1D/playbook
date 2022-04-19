console.log("Ejemplo 6: Ejemplo Map")
const {explorers} = require('./explorers.js');

const namesToUpperCase = explorers.map((explorer) => explorer.name.toUpperCase().slice(0, 3))
console.log(namesToUpperCase)