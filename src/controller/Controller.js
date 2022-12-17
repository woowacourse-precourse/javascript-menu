const InputView = require('../view/InputView');
const OuputView = require('../view/OutputView');

class Controller {
  #index = 0;
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
      this.#checkCoachList();
      console.log(this.#coachs);
    } catch (error) {}
  }

  #checkCoachList() {
    this.#inputNotEat(this.#coachs[this.#index]);
  }

  #inputNotEat(coachName) {
    InputView.notEat(coachName, (input) => {
      this.#checkNotEat(coachName, input);
      this.#index += 1;
      if (this.#index === this.#coachs.length) this.#newMethod();
      else this.#checkCoachList();
    });
  }

  #checkNotEat(coachName, input) {
    try {
      this.#notEatList.push([coachName, input]);
      console.log(this.#notEatList);
    } catch (error) {}
  }

  #newMethod() {}
}

module.exports = Controller;
