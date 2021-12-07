const axios = require('axios');

class Searches {
  history = [];

  constructor() {

  }

  paramsMapBox() {
    return {
      'access_token': process.env.MAPBOX_KEY,
      'limit': '5',
      'language': 'en'
    }
  }

  paramsWeatherMap(lat, lng) {
    return {
      'lat': `${lat}`,
      'lon': `${lng}`,
      'appid': process.env.OPENWEATHERMAP_KEY
    }
  }

  async city(place = '') {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?`,
        params: this.paramsMapBox()
      });

      const response = await instance.get();
      return response.data.features.map(element => ({
        id: element.id,
        name: element.place_name,
        lng: element.center[0],
        lat: element.center[1],
      }));

    } catch (err) {
      return err;
    }
  }

  async weather(lat, lng) {
    try {
      const toCelsius = (temperature) => {return (temperature - 32) * 5 / 9}
      const instance = axios.create({
        baseURL: 'https://api.openweathermap.org/data/2.5/weather?',
        params: this.paramsWeatherMap(lat, lng)
      });

      const response = await instance.get();
      return {
        'temp': toCelsius(response.data.main.temp).toFixed(2),
        'temp_min': toCelsius(response.data.main.temp_min).toFixed(2),
        'temp_max': toCelsius(response.data.main.temp_max).toFixed(2)
      };
    } catch (err){
      return err;
    }
  }

}

module.exports = Searches;