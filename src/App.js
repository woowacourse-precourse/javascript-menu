const Controller = require("./Controller");

class App {

  constructor() {
    this.Controller = new Controller();
  }

  play() {
    this.Controller.play();
  }
}

module.exports = App;