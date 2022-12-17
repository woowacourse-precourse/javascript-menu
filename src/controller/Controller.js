const InputView = require('../view/InputView');

class Controller {
  #coachs;

  inputCoach() {
    InputView.Coach((input) => {
      this.#checkCoach(input);
    });
  }

  #checkCoach(input) {
    try {
      this.#coachs = input.split(',');
    } catch (error) {}
  }

  #cannotEatFood() {}
}

module.exports = Controller;
