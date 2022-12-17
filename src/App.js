const Controller = require("./Controller");

class App {

  constructor() {
    this.Controller = new Controller();
  }

  play() {
    this.Controller.play();
  }
}

const app = new App()
app.play();
module.exports = App;