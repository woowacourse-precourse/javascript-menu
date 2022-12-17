const InputView = require('./InputView');
const MenuRecommend = require('./MenuRecommend');
const OutputView = require('./OutputView');

class Controller {
  #coachNames;

  #coachDislikeFood = new Map();

  #costomMenu = new Map();

  coachOrder = 0;

  #menuData = new Map();

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
    this.#coachDislikeFood.set(coach, food);
    this.coachOrder += 1;
    if (this.coachOrder < this.#coachNames.length) {
      this.getDislikeFood(this.#coachNames[this.coachOrder]);
    }
    if (this.coachOrder === this.#coachNames.length) {
      this.category = this.menuRecommend.createCategory();
      for (let coachCount = 0; coachCount < this.#coachNames.length; coachCount++) {
        this.setCoachAndDislikeFood(
          this.#coachNames[coachCount],
          this.#coachDislikeFood.get(this.#coachNames[coachCount]),
        );
      }
      this.setOutput();
    }
  }

  setCoachAndDislikeFood(coach, dislickFood) {
    if (dislickFood.includes(',')) {
      const dislickFoodArr = dislickFood.split(',');
      this.#costomMenu = this.menuRecommend.createMenu(dislickFoodArr);
      this.#menuData.set(coach, this.#costomMenu);
    } else {
      this.#costomMenu = this.menuRecommend.createMenu([dislickFood]);
      this.#menuData.set(coach, this.#costomMenu);
    }
  }

  setOutput() {}
}

module.exports = Controller;
