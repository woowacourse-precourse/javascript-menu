const InputView = require('../View/inputViews');
const OutputView = require('../View/outputViews');
const Coach = require('../Models/coach');
const Validate = require('../utils/validate');

class Controller {
  #coach;

  constructor() {
    this.#coach = [];
  }

  play() {
    this.askCoachsName();
  }

  askCoachsName() {
    InputView.readCoachName((coaches) => this.generateCoach(coaches));
  }

  generateCoach(coaches) {
    try {
      Validate.inputCoachNameValidate(coaches);
      coaches.split(',').forEach((coach) => this.#coach.push(new Coach(coach)));
    } catch (error) {
      OutputView.printCoachNameErorr(error.message);
      this.askCoachsName();
    }
  }
}

module.exports = Controller;
