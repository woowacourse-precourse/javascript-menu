const OutputView = require('./OutputView');

class App {
  play() {
    OutputView.printStartMessage();
  }
}

module.exports = App;

const app = new App();
app.play();