const { readBannedFoods } = require('../views/InputView');

class Coach {
  #name;

  #bannedFoods = [];

  constructor(name) {
    // console.log(`${name} 코치 생성!`);
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  getBannedFoods() {
    return this.#bannedFoods;
  }

  makeBannedFoods() {
    return new Promise((resolve) => {
      resolve(readBannedFoods(this.#name, this.setBannedFoods.bind(this)));
    });
  }

  setBannedFoods(food) {
    this.#bannedFoods = food.split(',');
  }
}
module.exports = { Coach };
