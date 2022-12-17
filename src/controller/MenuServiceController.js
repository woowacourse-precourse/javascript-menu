const {
  checkNameCountValid,
  checkNameLengthValid,
  checkDislikeCountValid,
  checkDislikeMenuValid,
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

      const reversed = names.reverse();

      try {
        this.inputCoachDislike(reversed);
      } catch (message) {
        this.view.printError(message);
        this.inputCoachDislike(reversed);
      }
    });
  }

  inputCoachDislike(names) {
    const name = names.pop();

    this.view.readCoachDislike(name, (menus) => {
      menus = [...new Set(menus.split(","))];

      checkDislikeCountValid(menus);
      if (menus.join("") !== "") checkDislikeMenuValid(menus);

      this.model.setCoachDislike([name, menus]);

      if (!names.length) return this.pickMenu();

      try {
        this.inputCoachDislike(names);
      } catch (message) {
        this.view.printError(message);
        this.inputCoachDislike(names);
      }
    });
  }

  pickMenu() {
    const names = this.model.getCoachName();
    const dislikes = this.model.getCoachDislike();

    console.log(names, dislikes);
  }
};

module.exports = MenuServiceController;
