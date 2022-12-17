const InputView = require('./InputView');
const OutputView = require('./OutputView');

class App {
  play() {
    OutputView.printStartMessage();
    InputView.readCoaches();
  }
}

module.exports = App;

const app = new App();
app.play();