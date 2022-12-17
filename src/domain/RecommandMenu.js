const { Random } = require('@woowacourse/mission-utils');
const { MenuMap } = require('./MenuMap');

class RecommandMenu {
  constructor() {
    this.menu = MenuMap;
  }

  pickCategory() {
    const index = Random.pickNumberInRange(1, 5) - 1;
    return [...this.menu.keys()][index];
  }

  createRandomMenu(category) {
    const recommandMenu = this.shuffleMenu(this.convertArray(this.menu.get(category)));
    return recommandMenu;
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

  getFoodOfCategory(category) {
    return this.convertArray([...this.menu.get(category)]);
  }
}

module.exports = RecommandMenu;
