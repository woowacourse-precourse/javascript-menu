MenuServiceController = class {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  start() {
    this.view.printStartMessage();

    this.#setCoachName();
  }

  #setCoachName() {
    this.view.readCoachName((names) => {
      console.log(names);
    });
  }
};

module.exports = MenuServiceController;
