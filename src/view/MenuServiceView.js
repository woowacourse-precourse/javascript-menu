MenuServiceView = class {
  constructor(inputView, outputView) {
    this.inputView = inputView;
    this.outputView = outputView;
  }

  readCoachName(callback) {
    this.inputView.readCoachName(callback);
  }

  printStartMessage() {
    this.outputView.printStartMessage();
  }
};

module.exports = MenuServiceView;
