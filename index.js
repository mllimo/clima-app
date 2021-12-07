const io = require('./helpers/io');
const Searches = require('./helpers/searches');
require('dotenv').config()

async function main() {
  let option;
  let searches = new Searches;
  do {
    option = await io.showMenu();
    switch (option) {
      case 1:
        let place = await io.readInput('City: ');
        let places = await searches.city(place);
        place = await io.list(places);
        console.log(place)
        break;
    }
    if (option !== 0) await io.pause();

  } while (option !== 0);
}

main();