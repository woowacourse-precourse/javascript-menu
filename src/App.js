const MenuGameController = require('./controller/MenuGameController');

class App {
  #menuGameController = new MenuGameController();
  play() {
    this.#menuGameController.start();
  }
}

module.exports = App;
