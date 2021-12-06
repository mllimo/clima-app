const io = require('./helpers/io');

async function main() {
  let option;
  
  do {
    option = await io.showMenu();
    console.log(option);
    if (option !== 0) await io.pause();

  } while(option !== 0);
} 

main();