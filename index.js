const io = require('./helpers/io');

async function main() {
  const edad = await io.readInput('Cual es tu edad?');
  console.log(edad);
} 

main();