const {
  checkNameCountValid,
  checkNameLengthValid,
  checkDislikeCountValid,
  checkDislikeMenuValid,
} = require("../validator/index");
const { getCategory } = require("../picker/index");

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

      if (!names.length) return this.pickCategory();

      try {
        this.inputCoachDislike(names);
      } catch (message) {
        this.view.printError(message);
        this.inputCoachDislike(names);
      }
    });
  }

  pickCategory() {
    const category = getCategory();
    const weekCategories = this.model.getWeekCategories();

    if (weekCategories.length === 5) return this.pickMenu();

    if (
      weekCategories.filter((weekCategory) => weekCategory === category)
        .length !== 2
    )
      this.model.setWeekCategories(category);

    this.pickCategory();
  }

  pickMenu() {
    const weekCategories = this.model.getWeekCategories();

    console.log(weekCategories);
  }
};

module.exports = MenuServiceController;
