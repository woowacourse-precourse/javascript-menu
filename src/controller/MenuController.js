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
      this.inputUnLikeMenu(0);
    });
  }

  inputUnLikeMenu(index) {
    InputView.readUnLikeMenu((input) => {
      this.#coachs[index].setUnLikeMenu(input);

      if (index < this.#coachs.length - 1) this.inputUnLikeMenu(index + 1);
    }, this.#coachs[index].getName());
  }
}

module.exports = MenuController;
