const MenuController = require('./Controllers/MenuController');
const InputView = require('./Views/InputView');
const OutputView = require('./Views/OutputView');

class App {
  play() {
    const views = {
      inputView: InputView,
      outputView: OutputView
    }

    new MenuController(views);
  }
}

module.exports = App;