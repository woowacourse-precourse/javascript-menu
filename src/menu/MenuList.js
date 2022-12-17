const { Random } = require("@woowacourse/mission-utils");

class MenuList {
  #categories = ["일식", "한식", "중식", "아시안", "양식"];
  #categoryRandomGenerator = Random;

  getCategory() {
    let randomNumber = this.#categoryRandomGenerator.pickNumberInRange(0, 4);
    randomNumber += 1;
    return this.#categories[randomNumber];
  }
  getMenu(category) {}
}

module.exports = MenuList;
