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

  shuffleArray(length) {
    return Random.shuffle(Array.from({ length: length }, (value, index) => index + 1));
  }

  create(coachHateFood, category) {
    return category.map(menuStyle => {
      while (true) {
        const shuffleNumbersArray = this.shuffleArray(9);
        const shuffledMenu = MenuMap.get(menuStyle)
          .split(', ')
          .map((food, index) => MenuMap.get(menuStyle).split(', ')[shuffleNumbersArray[index] - 1]);
        if (coachHateFood.includes(shuffledMenu[0])) {
          continue;
        }
        return shuffledMenu[0];
      }
    });
  }
}

module.exports = RecommendMenu;
