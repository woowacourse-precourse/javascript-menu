const Random = require('../utils/Random');
const { FOOD } = require('../constants/values');

class Category {
  #data = {
    selected: '',
    history: [],
  };

  constructor() {
    this.#init();
    this.#generate();
  }

  #init() {
    this.#data = {
      selected: '',
      history: Array.from({ length: 5 }, () => 0),
    };
  }

  #generate() {
    const number = Random.pickNumberInRange(1, 5);

    while (true) {
      switch (Random.pickNumberInRange(1, 5)) {
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
      if (this.#checkHistory(number)) {
        break;
      }
    }
  }

  #checkHistory(number) {
    if (this.#data.history[number - 1] === 2) {
      return false;
    }

    this.#data.history[number - 1] += 1;
    return true;
  }
}

module.exports = Category;
