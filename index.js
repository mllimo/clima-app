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
        // Show message
        const place = await io.readInput('City: '); 

        // Search the place
        searches.city(place);

        // Choose the place

        // Weather

        // Show results
        console.log('\nCity information'.green);
        console.log('\nCity: ',);
        console.log('\Lat: ',);
        console.log('\Lng: ',);
        console.log('\nTemperature: ',);
        console.log('\nMinimum: ',);
        console.log('\Maximum: ',);
        break;
      
      case 2:
        break;
    }

    if (option !== 0) await io.pause();

  } while(option !== 0);
} 

main();