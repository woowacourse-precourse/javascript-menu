const { Random } = require('@woowacourse/mission-utils');
const { MenuMap } = require('./MenuMap');

class RecommendMenu {
  constructor() {
    this.menu = MenuMap;
  }

  pickRandomMenuStyle() {
    return [...this.menu.keys()][Random.pickNumberInRange(1, 5) - 1];
  }

  createRandomCateroy() {
    const category = [];
    while (category.length < 5) {
      const RandomMenuStyle = this.pickRandomMenuStyle();
      const categoryMap = category.reduce((acc, cur) => {
        acc.set(cur, (acc.get(cur) || 0) + 1);
        return acc;
      }, new Map());
      if (categoryMap.get(RandomMenuStyle) === 2) {
        continue;
      }
      category.push(RandomMenuStyle);
    }
    return category;
  }

  static convertArray(ovject) {
    return ovject.split(', ');
  }

  static shuffleMenu(menu) {
    return Random.shuffle(menu);
  }

  static exceptHateFoodOfMenu(menu, hateFood) {
    return menu.filter(food => !hateFood.includes(food));
  }

  getFoodOfCategory(category) {
    return this.convertArray([...this.menu.get(category)]);
  }
}

module.exports = RecommendMenu;
