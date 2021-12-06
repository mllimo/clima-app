

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
    
  }
}

module.exports = Searches;