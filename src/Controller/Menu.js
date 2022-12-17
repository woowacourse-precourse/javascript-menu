const CoachValidation = require("../Validation/coachValidation");
const InputView = require("../View/InputView");
const DislikeMenuValidation = require("../Validation/DislikeMenuValidation");
const RandomCategory = require("../Model/RandomCategory");

class Menu {
  #coachNames;
  #dislikeMenu;

  constructor() {
    this.#coachNames;
    this.#dislikeMenu;
  }

  getCoachNames() {
    InputView.getName(this.handleCoachNames);
  }

  handleCoachNames = (name) => {
    const error = CoachValidation.validateCoach(name);
    if (error) return this.getCoachNames();
    this.#coachNames = name.split(",").map((name) => {
      return name;
    });
    console.log(this.#coachNames);
    this.getDislikeMenu(this.#coachNames);
  };

  getDislikeMenu(coachNames) {
    InputView.getDislikeMenu(coachNames, this.handleDislikeMenu);
  }

  handleDislikeMenu = (menu) => {
    const error = DislikeMenuValidation.validateMenu(menu);
    if (error) return this.getDislikeMenu(this.#coachNames);
    this.#dislikeMenu = menu.split(",").map((menu) => {
      return menu;
    });
    console.log(this.#dislikeMenu);
    this.getCategory();
  };

  getCategory() {
    console.log(RandomCategory.generator())
  }
}

module.exports = Menu;
