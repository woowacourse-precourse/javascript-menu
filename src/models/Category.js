const Random = require('../utils/Random');
const { FOOD } = require('../constants/values');

class Category {
  #data = {
    selected: '',
    history: [],
  };

  constructor() {
    this.#init();
    for (let i = 0; i < 5; i++) {
      this.#generate(i);
    }
  }

  #init() {
    this.#data = {
      selected: '',
      history: Array.from({ length: 5 }, () => 0),
    };
  }

  #generate(i) {
    let number = 0;

    while (true) {
      number = Random.pickNumberInRange(1, 5);
      switch (number) {
        case FOOD.japan:
          this.#data.selected = '일식';
          break;
        case FOOD.korea:
          this.#data.selected = '한식';
          break;
        case FOOD.china:
          this.#data.selected = '중식';
          break;
        case FOOD.asian:
          this.#data.selected = '아시안';
          break;
        case FOOD.western:
          this.#data.selected = '양식';
          break;
      }
      if (this.#checkHistory(number, i)) {
        break;
      }
    }
  }

  #checkHistory(number, i) {
    this.#data.history[i] = number;
    const sorted = this.#data.history.sort((a, b) => a - b);
    if (sorted[0] > 2) {
      return false;
    }

    return true;
  }

  get() {
    return this.#data.history;
  }
}

module.exports = Category;
