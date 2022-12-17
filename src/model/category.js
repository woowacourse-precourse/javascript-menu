const { Random } = require("@woowacourse/mission-utils");

//todo : 코치가 싫어하는 음식을 제외하고 추천해주는 로직을 여기서 처리할 지 고민해 봐야 한다.
class Category {
  #name;
  #menus;
  #numbers;
  constructor(name, menus) {
    this.#name = name;
    this.#menus = menus;
    this.#numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  }
  getName() {
    return this.#name;
  }
  recommend() {
    const number = Random.shuffle(this.#numbers)[0];
    return this.#menus[number];
  }
}

module.exports = Category;
