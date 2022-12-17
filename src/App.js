const Controller = require('../src/controller/Controller');
const Service = require('../src/service/Service');

class App {
  play() {
    new Controller(new Service()).startService();
  }
}

module.exports = App;
