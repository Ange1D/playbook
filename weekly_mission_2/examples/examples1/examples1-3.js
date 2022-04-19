console.log("Ejemplo 3: Ejemplo For Each")
const {explorers} = require('./explorers.js');
explorers.forEach((explorer) => console.log(explorer.name.toUpperCase()))