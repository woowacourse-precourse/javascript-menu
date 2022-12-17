MenuServiceView = class {
  constructor(inputView, outputView) {
    this.inputView = inputView;
    this.outputView = outputView;
  }

  readCoachName(callback) {
    this.inputView.readCoachName(callback);
  }

  readCoachDislike(name, callback) {
    this.inputView.readCoachDislike(name, callback);
  }

  printStartMessage() {
    this.outputView.printStartMessage();
  }

  printResultMessage() {
    this.outputView.printResultMessage();
  }

  printResult(categoryMessage, coachMessages) {
    this.outputView.printResult(categoryMessage, coachMessages);
  }

  printEndMessage() {
    this.outputView.printEndMessage();
  }

  printError(message) {
    this.outputView.print(message);
  }
};

module.exports = MenuServiceView;
