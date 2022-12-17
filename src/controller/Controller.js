const InputView = require('../view/InputView');
const OuputView = require('../view/OutputView');

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
    InputView.Coach((input) => {
      this.#checkCoach(input);
    });
  }

  #checkCoach(input) {
    try {
      this.#coachs = input.split(',');
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
