const Random = require('../utils/Random');
const { STYLE } = require('../constants/values');

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
      history: Array.from({ length: 5 }, () => -1),
    };
  }

  #generate(i) {
    let number = 0;

    while (true) {
      number = Random.pickNumberInRange(1, 5) - 1;
      this.#data.selected = STYLE[number];
      if (this.#checkHistory(number, i)) {
        break;
      }
    }
  }

  #checkHistory(number, i) {
    this.#data.history[i] = number;

    let count = 0;
    this.#data.history.forEach(v => {
      if (v === number) {
        count += 1;
      }
    });
    if (count > 2) {
      return false;
    }

    return true;
  }

  get() {
    return this.#data.history;
  }
}

module.exports = Category;
