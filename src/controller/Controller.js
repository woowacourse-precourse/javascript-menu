const InputView = require('../view/InputView');
const OuputView = require('../view/OutputView');
const Validation = require('../utils/Validation');

class Controller {
  #index = 0;
  #coachs;
  #notEatList = [];
  #service;

  constructor(service) {
    this.#service = service;
  }

  startService() {
    OuputView.startMent();
    this.#inputCoach();
  }

  #inputCoach() {
    InputView.coach((input) => {
      this.#checkCoach(input);
    });
  }

  #checkCoach(input) {
    try {
      Validation.coachName(input);
      this.#coachs = input.split(',');
      Validation.coachNumber(this.#coachs);
      this.#checkCoachList();
    } catch (error) {}
  }

  #checkCoachList() {
    this.#inputNotEat(this.#coachs[this.#index]);
  }

  #inputNotEat(coachName) {
    InputView.notEat(coachName, (input) => {
      this.#checkNotEat(coachName, input);
      this.#index += 1;
      if (this.#index === this.#coachs.length) this.#deliverNotEatList();
      else this.#checkCoachList();
    });
  }

  #checkNotEat(coachName, input) {
    try {
      Validation.notEat(input);
      this.#notEatList.push([coachName, input]);
    } catch (error) {}
  }

  #deliverNotEatList() {
    this.#service.defineCoachNotEatList(this.#notEatList);
    this.#outputResultMent();
  }

  #outputResultMent() {
    OuputView.resultMent();
    this.#outputCategory();
  }

  #outputCategory() {
    const category = this.#service.defineCategoryList().join(',').replace(/,/g, ' | ');
    OuputView.category(category);
    this.#outputResult();
  }

  #outputResult() {
    const results = this.#service.defineCoachFoodOfWeak();
    results.forEach((list) => {
      OuputView.listResult(list.coach, list.result.join(',').replace(/,/g, ' | '));
    });
    OuputView.endMent();
  }
}

module.exports = Controller;
