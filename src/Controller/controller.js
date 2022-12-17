const InputView = require('../View/inputViews');
const Coach = require('../Models/coach');
const Validate = require('../utils/validate');
const OutputView = require('../View/outputViews');

class Controller {
  #coaches;

  constructor() {
    this.#coaches = [];
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
      coaches.split(',').forEach((coach) => this.#coaches.push(new Coach(coach)));
      this.exceoptionFoods();
    } catch (error) {
      OutputView.printCoachNameErorr(error.message);
      this.askCoachsName();
    }
  }

  exceoptionFoods() {
    Promise.all(
      this.#coaches.map(async (coach) => {
        return InputView.readExceptionFoods(coach);
      }),
    );
  }

  addFood() {
    const index = 0;
  }

  //   exceoptionFoods() {
  //     this.#coaches.map((coach) =>
  //       InputView.readExceptionFoods(coach, (coach, answer) =>
  //         this.settingExceptionFood(coach, answer),
  //       ),
  //     );
  //   }

  //   settingExceptionFood(coach, foods) {
  //     try {
  //       Validate.exceptionFoodsValidate(foods);
  //       coach.setExceoptionFoods(foods);
  //     } catch {
  //       InputView.readExceptionFoods(coach, (coach, answer) =>
  //         this.settingExceptionFood(coach, answer),
  //       );
  //     }
  //   }
}

module.exports = Controller;
