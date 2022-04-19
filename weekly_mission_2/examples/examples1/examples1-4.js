console.log("Ejemplo 4: Ejemplo Map")
const {explorers} = require('./explorers.js');

const explorersstacks = explorers.map(explorer => explorer.stack)

console.log(`lista de stacks \n` + explorersstacks)