console.log("Ejemplo 7: Ejemplo de Filter")
const {explorers} = require('./explorers.js');

const explorers_with_js = explorers.filter(explorer => explorer.stack.includes("js"))
console.log(explorers_with_js)