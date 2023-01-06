const { Random } = require('@woowacourse/mission-utils');
const { MenuMap } = require('./MenuMap');

class RecommendMenu {
  constructor() {
    this.menu = MenuMap;
  }

  pickRandomMenuStyle() {
    return [...this.menu.keys()][Random.pickNumberInRange(1, 5) - 1];
  }

  duplicateCountMap(category) {
    return category.reduce((acc, cur) => {
      acc.set(cur, (acc.get(cur) || 0) + 1);
      return acc;
    }, new Map());
  }

  createRandomCateroy() {
    const category = [];
    while (category.length < 5) {
      const RandomMenuStyle = this.pickRandomMenuStyle();
      if (this.duplicateCountMap(category).get(RandomMenuStyle) === 2) {
        continue;
      }
      category.push(RandomMenuStyle);
    }
    return category;
  }

  shuffleArray(length) {
    return Random.shuffle(Array.from({ length: length }, (_, index) => index + 1));
  }

  readFoods(menuStyle) {
    return this.menu.get(menuStyle).split(', ');
  }

  shuffledMenu(menuStyle) {
    const shuffleArray = this.shuffleArray(9);
    return this.readFoods(menuStyle).map((food, index) => this.readFoods(menuStyle)[shuffleArray[index] - 1]);
  }

  create(coachHateFood, category) {
    const result = [];
    category.forEach((menuStyle, idx) => {
      while (true) {
        const shuffledMenu = this.shuffledMenu(menuStyle);
        if (coachHateFood.includes(shuffledMenu[0]) || shuffledMenu[0] === result[result.length - 1]) {
          continue;
        }
        result.push(shuffledMenu[0]);
        return;
      }
    });
    return result;
  }
}

module.exports = RecommendMenu;
