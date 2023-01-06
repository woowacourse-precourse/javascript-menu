const { Random } = require('@woowacourse/mission-utils');
const { MenuMap } = require('./MenuMap');

class RecommendMenu {
  createRandomCateroy() {
    const categoryArray = [];
    while (categoryArray.length < 5) {
      const RandomMenuStyle = this.pickRandomMenuStyle();
      if (this.duplicateCountMap(categoryArray).get(RandomMenuStyle) === 2) {
        continue;
      }
      categoryArray.push(RandomMenuStyle);
    }
    return categoryArray;
  }

  create(coachHateFood, category) {
    const result = [];
    category.forEach((menuStyle, idx) => {
      while (true) {
        const shuffledMenu = this.shuffleMenu(menuStyle);
        if (coachHateFood.includes(shuffledMenu[0]) || shuffledMenu[0] === result[result.length - 1]) {
          continue;
        }
        result.push(shuffledMenu[0]);
        return;
      }
    });
    return result;
  }

  pickRandomMenuStyle() {
    return [...MenuMap.keys()][Random.pickNumberInRange(1, 5) - 1];
  }

  readMenu(menuStyle) {
    return MenuMap.get(menuStyle).split(', ');
  }

  duplicateCountMap(array) {
    return array.reduce((acc, cur) => {
      acc.set(cur, (acc.get(cur) || 0) + 1);
      return acc;
    }, new Map());
  }

  shuffleArray(length) {
    return Random.shuffle(Array.from({ length: length }, (_, index) => index + 1));
  }

  shuffleMenu(menuStyle) {
    const shuffleArray = this.shuffleArray(9);
    return this.readMenu(menuStyle).map((food, index) => this.readMenu(menuStyle)[shuffleArray[index] - 1]);
  }
}

module.exports = RecommendMenu;
