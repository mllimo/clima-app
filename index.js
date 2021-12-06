const io = require('./helpers/io');
const Searches = require('./helpers/searches');
async function main() {
  let option;
  let searches = new Searches;
  do {
    option = await io.showMenu();
    switch (option) {
      case 1:
        let place = await io.readInput('City: ');
        await searches.city(place);
        break;
    }
    if (option !== 0) await io.pause();

  } while (option !== 0);
}

main();