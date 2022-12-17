const InputView = require('./InputView');
const MenuRecommend = require('./MenuRecommend');
const OutputView = require('./OutputView');

class Controller {
  #coachNames;

  #coachDislikeFood = new Map();

  coachOrder = 0;

  constructor() {
    this.menuRecommend = new MenuRecommend();
  }

  start() {
    OutputView.printStart();
    this.getName();
  }

  getName() {
    InputView.readName(this.setNames.bind(this));
  }

  setNames(name) {
    this.#coachNames = name.split(',');
    this.getDislikeFood(this.#coachNames[this.coachOrder]);
  }

  getDislikeFood(coach) {
    InputView.readDislikeFood(this.setDislikeFood.bind(this, coach), coach);
  }

  setDislikeFood(coach, food) {
    this.#coachDislikeFood.set(coach, [food]);
    this.coachOrder += 1;
    if (this.coachOrder < this.#coachNames.length) {
      this.getDislikeFood(this.#coachNames[this.coachOrder]);
    }
    if (this.coachOrder === this.#coachNames.length) {
      console.log(this.coachOrder, 'dkssud');
      this.menuRecommend.createCategory();
    }
  }
}

module.exports = Controller;
