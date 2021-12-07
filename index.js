const { green } = require('colors');
const io = require('./helpers/io');
const Searches = require('./helpers/searches');
require('dotenv').config()

function showInformation(search) {
  console.log('City information:'.green);
  console.log('\nCity: '.white, search.name);
  console.log('Lat: '.white, search.place.lat);
  console.log('Lng: '.white, search.place.lng);
  console.log('Temperature: ', `${search.weather.temp}C`);
  console.log('Minimum temperature: ', `${search.weather.temp_min}C`);
  console.log('Maximum temperature: ', `${search.weather.temp_max}C`);
}

async function main() {
  let option;
  let searches = new Searches;
  let place, places, place_id, weather, search;
  do {
    option = await io.showMenu();
    switch (option) {
      case 1:
        place = await io.readInput('City: ');
        places = await searches.city(place);
        place_id = await io.list(places);
        place = places.find(e => e.id == place_id);
        weather = await searches.weather(place.lat, place.lng);
        search = searches.addToHistory(place, weather);
        showInformation(search);
        break;

      case 2:
        place = await io.list(searches.history);
        console.log(place);
        search = searches.findFromHistory(place);
        showInformation(search);
        break;
    }
    if (option !== 0) await io.pause();

  } while (option !== 0);
}

main();