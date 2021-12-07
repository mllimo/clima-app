const { green } = require('colors');
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
        let place_id = await io.list(places);
        place = places.find(e => e.id == place_id);
        
        console.log('City information:'.green);
        console.log('\nCity: '.white, place.name);
        console.log('Lat: '.white, place.lat);
        console.log('Lng: '.white, place.lng);

        let weather = await searches.weather(place.lat, place.lng);
        console.log('Temperature: ', `${weather.temp}C`);
        console.log('Minimum temperature: ', `${weather.temp_min}C`);
        console.log('Maximum temperature: ', `${weather.temp_max}C`);

        searches.history.push({name: place.name, 'place': place, 'weather': weather});
        break;

      case 2:
        await io.list(searches.history);
        // Mostrar info
        break;
    }
    if (option !== 0) await io.pause();

  } while (option !== 0);
}

main();