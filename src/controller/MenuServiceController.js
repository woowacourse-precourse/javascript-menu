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

    try {
      this.inputCoachName();
    } catch (message) {
      this.view.printError(message);
      this.inputCoachName();
    }
  }

  inputCoachName() {
    this.view.readCoachName((names) => {
      names = [...new Set(names.split(","))];

      checkNameCountValid(names);
      checkNameLengthValid(names);

      this.model.setCoachName(names);

      this.inputCoachDislike(names.reverse());
    });
  }

  inputCoachDislike(names) {
    this.view.readCoachDislike(names.pop(), (menus) => {
      if (!names.length) this.next();

      this.inputCoachDislike(names);
    });
  }

  next() {
    console.log("done");
  }
};

module.exports = MenuServiceController;
