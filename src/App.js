const InputView = require("./view/InputView");
const OutputView = require("./view/OutputView");
const MenuServiceView = require("./view/MenuServiceView");
const MenuServiceModel = require("./model/MenuServiceModel");
const MenuServiceController = require("./controller/MenuServiceController");

class App {
  constructor() {
    this.view = new MenuServiceView(InputView, OutputView);
    this.model = new MenuServiceModel();
    this.controller = new MenuServiceController(this.view, this.model);
  }

  play() {
    this.controller.start();
  }
}

const app = new App();
app.play();

module.exports = App;
