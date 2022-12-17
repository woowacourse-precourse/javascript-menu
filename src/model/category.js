const { Random } = require("@woowacourse/mission-utils");

//todo : 코치가 싫어하는 음식을 제외하고 추천해주는 로직을 여기서 처리할 지 고민해 봐야 한다.
class Category {
  #name;
  #menus;

  constructor(name, menus) {
    this.#name = name;
    this.#menus = menus;
  }

  recommend() {
    return Random.shuffle(this.#menus)[0];
  }
}

module.exports = Category;
