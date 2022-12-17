const InputView = require('../view/InputView');
const OuputView = require('../view/OutputView');

class Controller {
  #coachs;
  #notEatList = [];

  startService() {
    OuputView.startMent();
    this.#inputCoach();
  }

  #inputCoach() {
    InputView.Coach((input) => {
      this.#checkCoach(input);
    });
  }

  #checkCoach(input) {
    try {
      this.#coachs = input.split(',');
      this.#checkCoachNotEat();
    } catch (error) {}
  }

  #checkCoachNotEat() {
    this.#coachs.forEach((coachName) => {
      this.#inputNotEat(coachName);
    });
  }

  #inputNotEat(coachName) {
    InputView.notEat(coachName, (input) => {
      this.#checkNotEat(coachName, input);
    });
  }

  #checkNotEat(coachName, input) {
    try {
      this.#notEatList.push([coachName, input]);
    } catch (error) {}
  }
}

module.exports = Controller;
