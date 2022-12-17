const {
  checkNameCountValid,
  checkNameLengthValid,
} = require("../validator/index");

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
      names = [...new Set(names.split(","))];

      checkNameCountValid(names);
      checkNameLengthValid(names);
    });
  }
};

module.exports = MenuServiceController;
