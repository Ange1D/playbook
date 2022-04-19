console.log("Ejemplo 9: Ejemplo de Reduce")
const {explorers} = require('./explorers.js');

const all_exercises = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0)
console.log(all_exercises)