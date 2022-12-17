const MenuView = require('./view/MenuView');
const MenuModel = require('./model/MenuModel');
const MenuCtrl = require('./controller/MenuCtrl');
const InputView = require('./view/InputView');
const OutputView = require('./view/OutputView');

class App {
  constructor() {
    this.view = new MenuView(InputView, OutputView);
    this.model = new MenuModel();
    this.ctrl = new MenuCtrl(this.view, this.model);
  }

  play() {
    this.ctrl.start();
  }
}

const app = new App();
app.play();

module.exports = App;
