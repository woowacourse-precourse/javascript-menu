const OutputView = require("./view/OutputView");
const MenuServiceView = require("./view/MenuServiceView");
const MenuServiceController = require("./controller/MenuServiceController");

class App {
  constructor() {
    this.view = new MenuServiceView(OutputView);
    this.controller = new MenuServiceController(this.view);
  }

  play() {
    this.controller.start();
  }
}

const app = new App();
app.play();

module.exports = App;
