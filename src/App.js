const GameController = require('./controller.js/gameController');

class App {
  play() {
    new GameController();
  }
}

module.exports = App;
