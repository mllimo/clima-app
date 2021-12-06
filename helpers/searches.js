const axios = require('axios');

class Searches {
  history = [];

  constructor() {

  }

  get paramsMapBox() {
    return {
      'access_token': process.env.MAPBOX_KEY,
      'limit': '5',
      'language': 'en'
    }
  }

  async city(place = '') {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?`,
        params: this.paramsMapBox
      });

      const response = await instance.get();
      return response.data.features.map(element => ({
        id: element.id,
        name: element.place_name,
        lng: element.center[0],
        lat: element.center[1],
      }));

    } catch (error) {
      console.log(error.red);
    }

  }
}

module.exports = Searches;