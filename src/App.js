const OutputView = require('./OutputView');
const InputView = require('./InputView');

class App {
  play() {
    OutputView.printStart();
    InputView.readCoachesName();
  }
}

const app = new App();
app.play();

module.exports = App;
