console.log("Ejemplo 16: Ejemplo de Sort")
const {explorers} = require('./explorers.js');

explorers.sort((a, b) => { // podemos invocar una función
    if (a.rate < b.rate) return -1
    if (a.rate > b.rate) return 1
    return 0
  })

console.log(explorers)