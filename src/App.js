const Service = require('./controller/Service');

class App {
  #service;

  constructor() {
    this.#service = new Service();
  }

  play() {
    this.#service.start();
  }
}

const app = new App();
app.play();

module.exports = App;
