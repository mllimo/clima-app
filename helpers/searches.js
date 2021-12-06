const axios = require('axios');

class Searches {
  history = [];

  constructor() {

  }

  get paramsMapBox() {
    return {
      'access_token': 'pk.eyJ1IjoibWxsaW1vIiwiYSI6ImNrd3V5djlndzF1eHAycHAzbGZjbmtsMHMifQ.zVKVa0FbNJL__3MMVKYOwg',
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
      console.log(response);

      //this.history.push(place);

    } catch (error) {
      console.error(error);
    }

  }
}

module.exports = Searches;