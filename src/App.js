const GameController = require('./controller.js/gameController');
const OutputView = require('./view/OutputView');

class App {
  play() {
    OutputView.printStart();
    new GameController().inputCoachName();
  }
}
module.exports = App;
