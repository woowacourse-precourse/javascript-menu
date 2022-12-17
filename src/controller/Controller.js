const InputView = require('../view/InputView');

class Controller {
  #coachs;
  #notEatList = [];

  inputCoach() {
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
