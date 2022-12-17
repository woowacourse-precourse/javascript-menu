const InputView = require("../View/InputView");

class Menu {
  #coachNames;

  constructor() {
    this.#coachNames;
  }

  getCoachNames() {
    InputView.getName(this.handleCoachNames);
  }

  handleCoachNames = (name) => {
    this.#coachNames = name.split(",").map((name) => {
      return name;
    });
  };
}

module.exports = Menu;
