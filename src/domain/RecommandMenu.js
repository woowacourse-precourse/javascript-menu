const { Random } = require('@woowacourse/mission-utils');
const { MenuMap } = require('./MenuMap');

class RecommandMenu {
  #menu = MenuMap;
  constructor() {}

  pickCategory() {
    const index = Random.pickNumberInRange(1, 5) - 1;
    return [...this.#menu.keys()][index];
  }

  choiceComplete(category, hateFood) {
    let menu = this.#menu.get(category).split(', ');
    let shuffledMenu = Random.shuffle(menu);
    let exceptHateFoodMenu = shuffledMenu.filter((food) => !hateFood.includes(food));
    return exceptHateFoodMenu;
  }

  convertArray(ovject) {
    return ovject.split(', ');
  }

  shuffleMenu(menu) {
    return Random.shuffle(menu);
  }

  exceptHateFoodOfMenu(menu, hateFood) {
    return menu.filter((food) => !hateFood.includes(food));
  }
}

module.exports = RecommandMenu;
