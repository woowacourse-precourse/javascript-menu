const Coach = require("../domain/Coach");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");

class MenuController {
  #coachs;

  constructor() {}

  startRecommendMenu() {
    OutputView.printStart();

    this.inputCoachName();
  }

  inputCoachName() {
    InputView.readCoachName((input) => {
      const coachNames = input.split(",");
      const coachs = [];

      coachNames.forEach((coachName) => {
        coachs.push(new Coach(coachName));
      });

      this.#coachs = coachs;
    });
  }

  inputUnLikeMenu() {
    InputView.readUnLikeMenu((input) => {});
  }
}

module.exports = MenuController;
