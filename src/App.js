const LunchMenuService = require('./Controller/LunchMenuService');

class App {
  #service;

  constructor() {
    this.#service = new LunchMenuService();
  }

  play() {
    this.#service.start();
  }
}

module.exports = App;
