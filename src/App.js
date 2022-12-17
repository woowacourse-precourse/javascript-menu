const ServiceController = require('./controller/ServiceController');

class App {
  #controller = new ServiceController();

  play() {
    this.#controller.start();
  }
}

module.exports = App;
