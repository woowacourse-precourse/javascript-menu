MenuServiceView = class {
  constructor(outputView) {
    this.outputView = outputView;
  }

  printStartMessage() {
    this.outputView.printStartMessage();
  }
};

module.exports = MenuServiceView;
