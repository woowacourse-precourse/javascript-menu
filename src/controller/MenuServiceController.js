MenuServiceController = class {
  constructor(view) {
    this.view = view;
  }

  start() {
    this.view.printStartMessage();
  }
};

module.exports = MenuServiceController;
