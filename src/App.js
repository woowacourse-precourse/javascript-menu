const OutputView = require("./OutputView");
const InputView = require("./InputVIew");
class App {
  play() {
    OutputView.printStart();
    InputView.readCoachName();
  }
}
module.exports = App;
